from django.urls import path
from . import views
from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('api/', views.getRoutes),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register', views.postRegisterUser),
    path('api/me', views.getMe),
    path('api/topics', views.getTopics),
    path('api/all-topics', views.getAllTopics),
    path('api/projects', views.getProjects),
    path('api/project/<str:pk>', views.getProject),
    path('api/projectbyname/<str:project_name>', views.getProjectByName),
    path('api/projects/<str:topic_name>', views.getProjectsByTopic),
    path('api/search-projects/<str:query_search>', views.getProjectsBySearch),
    path('api/user-projects/<str:pk>', views.getProjectsByUser),
    path('api/user-profile/<str:pk>', views.getUserProfile),
    path('api/recent-activities', views.getRecentActivities),
    path('api/user-activities/<str:pk>', views.getUserRecentActivties),
    path('api/project-activities/<str:pk>', views.getProjectActivities),
    path('api/project-participants/<str:pk>', views.getProjectParticipants),
]
