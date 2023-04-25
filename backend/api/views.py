from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from django.db.models import Count, Q
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from daevent.models import Topic, Project, Message, CustomUser
from .serializers import TopicSerializer, ProjectSerializer, MessageSerializer, RecentMessageSerializer, \
    ParticipantsSerializer, TopicListSerializer, UserSerializer, UserRegisterSerializer, UserChangePasswordSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from daevent.forms import ProjectForm, MessageForm, CustomUserChangeForm


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
        'POST /api/token',
        'POST /api/token/refresh',
        'POST /api/register',
        'POST /api/change-password',
        'POST /api/update-user',
        'POST /api/create-project',
        'POST /api/update-project/:id',
        'POST /api/add-user-to-project/:id',
        'POST /api/add-comment/:id',
        'DELETE /api/delete-user/:id',
        'DELETE /api/delete-project/:id',
        'DELETE /api/delete-comment/:id',
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
    query_search = kwargs.get('query_search')
    projects = Project.objects.filter(
        Q(topic__name__icontains=query_search) |
        Q(name__icontains=query_search) |
        Q(description__icontains=query_search)
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
    if Topic.objects.filter(name=topic_name).exists():
        projects = Project.objects.filter(
            Q(topic__name__exact=topic_name)
        )
    else:
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


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def postUpdateUser(request):
    try:
        user = CustomUser.objects.get(id=request.user.id)
    except CustomUser.DoesNotExist:
        return Response({'message': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)

    form = CustomUserChangeForm(request.data, request.FILES, instance=user)
    if form.is_valid():
        full_name = request.data.get('full_name').split()
        full_name = ' '.join(map(lambda x: x.capitalize(), full_name))
        user = form.save(commit=False)
        user.full_name = full_name
        user.save()
        return Response({'message': 'User successfully updated'}, status=status.HTTP_200_OK)
    return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def postCreateProject(request):
    form = ProjectForm(request.data)
    if form.is_valid():
        topic_name = request.data.get('topic').capitalize()
        topic, created = Topic.objects.get_or_create(name=topic_name)
        project = form.save(commit=False)
        project.topic = topic
        project.host = request.user
        project.save()
        project.participants.add(request.user)
        return Response({'message': 'Project successfully created'}, status=status.HTTP_201_CREATED)
    return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def postUpdateProject(request, pk):
    try:
        project = Project.objects.get(id=pk)
    except Project.DoesNotExist:
        return Response({'message': 'Project does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if project.host != request.user:
        return Response({'message': 'You are not authorized to update this project'}, status=status.HTTP_401_UNAUTHORIZED)

    form = ProjectForm(request.data, instance=project)
    if form.is_valid():
        topic_name = request.data.get('topic').capitalize()
        topic, created = Topic.objects.get_or_create(name=topic_name)
        project = form.save(commit=False)
        project.topic = topic
        project.save()
        return Response({'message': 'Project successfully updated'}, status=status.HTTP_200_OK)
    return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def postUserChangePassword(request):
    serializer = UserChangePasswordSerializer(data=request.data)
    if serializer.is_valid():
        user = authenticate(
            request=request,
            username=request.user.email,
            password=serializer.data.get('old_password')
        )
        if user is not None:
            new_password = serializer.data.get('new_password')
            request.user.password = make_password(new_password)
            request.user.save()
            return Response({'status': 'success', 'message': 'Password updated successfully'}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def postAddParticipant(request, pk):
    try:
        project = Project.objects.get(id=pk)
    except Project.DoesNotExist:
        return Response({'message': 'Project does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if project.participants.filter(id=request.user.id).exists():
        return Response({'message': 'You are not authorized to delete this project'}, status=status.HTTP_406_NOT_ACCEPTABLE)

    project.participants.add(request.user)
    return Response({'message': 'User successfully joined'}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def postAddComment(request, pk):
    try:
        project = Project.objects.get(id=pk)
    except Project.DoesNotExist:
        return Response({'message': 'Project does not exist'}, status=status.HTTP_404_NOT_FOUND)

    form = MessageForm(request.data)
    if form.is_valid():
        message = form.save(commit=False)
        message.project = project
        message.user = request.user
        message.save()
        return Response({'message': 'Comment successfully created'}, status=status.HTTP_200_OK)
    return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteUser(request, pk):
    user = CustomUser.objects.get(id=pk)
    user.delete()
    return Response({'message': 'User successfully deleted'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteProject(request, pk):
    try:
        project = Project.objects.get(id=pk)
    except Project.DoesNotExist:
        return Response({'message': 'Project does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if project.host != request.user:
        return Response({'message': 'You are not authorized to delete this project'}, status=status.HTTP_401_UNAUTHORIZED)


    project.delete()
    return Response({'message': 'Project successfully deleted'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteComment(request, pk):
    try:
        message = Message.objects.get(id=pk)
    except Message.DoesNotExist:
        return Response({'message': 'Message does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if message.user != request.user:
        return Response({'message': 'You are not authorized to delete this comment'}, status=status.HTTP_401_UNAUTHORIZED)

    message.delete()
    return Response({'message': 'Comment successfully deleted'}, status=status.HTTP_204_NO_CONTENT)
