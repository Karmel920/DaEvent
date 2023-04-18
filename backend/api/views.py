from django.db.models import Count, Q
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.decorators import api_view
from daevent.models import Topic, Project, Message, CustomUser
from .serializers import TopicSerializer, ProjectSerializer, MessageSerializer, RecentMessageSerializer, \
    ParticipantsSerializer, TopicListSerializer

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
def getRoutes(request):
    routes = [
        'GET /api',
        'POST /api/token',
        'POST /api/token/refresh',
        'GET /api/topics',
        'GET /api/all-topics',
        'GET /api/projects',
        'GET /api/project/:id',
        'GET /api/projects/:topic_name',
        'GET /api/user-projects/:id',
        'GET /api/recent-activities/',
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
    pagination_class = PageNumberPagination()
    projects = Project.objects.all()
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
def getProjectsByTopic(request, **kwargs):
    pagination_class = PageNumberPagination()
    topic_name = kwargs.get('topic_name')
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
def getProjectsByUser(request, pk):
    user = CustomUser.objects.get(id=pk)
    projects = user.project_set.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getRecentActivities(request):
    activities = Message.objects.all()
    serializer = RecentMessageSerializer(activities[:3], many=True)
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
