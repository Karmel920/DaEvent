from django.db.models import Count, Q
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from daevent.models import Topic, Project, Message, CustomUser
from .serializers import TopicSerializer, ProjectSerializer, MessageSerializer, RecentMessageSerializer, \
    ParticipantsSerializer, TopicListSerializer, UserSerializer, UserRegisterSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['full_name'] = user.full_name

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMe(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)


@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET /api',
        'POST /api/token',
        'POST /api/token/refresh',
        'POST /api/register',
        'GET /api/me',
        'GET /api/topics',
        'GET /api/all-topics',
        'GET /api/projects',
        'GET /api/project/:id',
        'GET /api/projectbyname/:project_name',
        'GET /api/projects/:topic_name',
        'GET /api/search-projects/:query_search',
        'GET /api/user-projects/:id',
        'GET /api/user-profile/:id',
        'GET /api/recent-activities',
        'GET /api/user-activities/:id',
        'GET /api/project-activities/:id',
        'GET /api/project-participants/:id',
    ]
    return Response(routes)


@api_view(['GET'])
def getTopics(request):
    topics = Topic.objects.annotate(project_count=Count('project')).order_by('-project_count')[:5]
    serializer = TopicSerializer(topics)
    return Response(serializer.data)


@api_view(['GET'])
def getAllTopics(request):
    topics = Topic.objects.annotate(project_count=Count('project')).order_by('-project_count')
    serializer = TopicSerializer(topics)
    return Response(serializer.data)


@api_view(['GET'])
def getProjects(request):
    projects = Project.objects.all()
    pagination_class = PageNumberPagination()
    page = pagination_class.paginate_queryset(projects, request)

    if page is not None:
        serializer = ProjectSerializer(page, many=True)
        return pagination_class.get_paginated_response(serializer.data)

    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProject(request, pk):
    project = Project.objects.get(id=pk)
    serializer = ProjectSerializer(project, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getProjectsBySearch(request, **kwargs):
    pagination_class = PageNumberPagination()
    topic_name = kwargs.get('query_search')
    projects = Project.objects.filter(
        Q(topic__name__icontains=topic_name) |
        Q(name__icontains=topic_name) |
        Q(description__icontains=topic_name)
    )
    page = pagination_class.paginate_queryset(projects, request)

    if page is not None:
        serializer = ProjectSerializer(page, many=True)
        return pagination_class.get_paginated_response(serializer.data)

    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProjectsByTopic(request, **kwargs):
    pagination_class = PageNumberPagination()
    topic_name = kwargs.get('topic_name')
    projects = Project.objects.filter(
        Q(topic__name__exact=topic_name)
    )
    page = pagination_class.paginate_queryset(projects, request)

    if page is not None:
        serializer = ProjectSerializer(page, many=True)
        return pagination_class.get_paginated_response(serializer.data)

    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProjectByName(request, **kwargs):
    project_name = kwargs.get('project_name')
    project = Project.objects.filter(name__exact=project_name)
    serializer = ProjectSerializer(project, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProjectsByUser(request, pk):
    pagination_class = PageNumberPagination()
    user = CustomUser.objects.get(id=pk)
    projects = user.project_set.all()
    page = pagination_class.paginate_queryset(projects, request)

    if page is not None:
        serializer = ProjectSerializer(page, many=True)
        return pagination_class.get_paginated_response(serializer.data)

    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getRecentActivities(request):
    activities = Message.objects.all()
    serializer = RecentMessageSerializer(activities[:3], many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getUserRecentActivties(request, pk):
    user = CustomUser.objects.get(id=pk)
    activities = user.message_set.all()
    serializer = RecentMessageSerializer(activities[:5], many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProjectActivities(request, pk):
    project = Project.objects.get(id=pk)
    activities = project.message_set.all()
    serializer = MessageSerializer(activities, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProjectParticipants(request, pk):
    project = Project.objects.get(id=pk)
    serializer = ParticipantsSerializer(project, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getUserProfile(request, pk):
    user = CustomUser.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def postRegisterUser(request):
    serializer = UserRegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'User successfully registered'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
