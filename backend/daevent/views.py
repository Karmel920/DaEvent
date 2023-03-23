from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import Project
from .models import Topic
from .models import UserDetails
from .serializers import ProjectSerializer
from .serializers import TopicSerializer
from .serializers import UserDetailsSerializer


class TopicView(ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer


class ProjectView(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class UserDetailsView(ModelViewSet):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailsSerializer


# @api_view(['GET'])
# def get_routes(request):
#     routes = [
#         'GET /api',
#         'GET /api/projects',
#         'GET /api/projects/:id'
#     ]
#     return Response(routes)
#
#
# @api_view(['GET'])
# def get_projects(request):
#     projects = Project.objects.all()
#     serializer = ProjectSerializer(projects, many=True)
#     return Response(serializer.data)
#
#
# @api_view(['GET'])
# def get_project(request, pk):
#     project = Project.objects.get(id=pk)
#     serializer = ProjectSerializer(project, many=False)
#     return Response(serializer.data)
