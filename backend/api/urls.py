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
    path('api/topics', views.getTopics),
    path('api/all-topics', views.getAllTopics),
    path('api/projects', views.getProjects),
    path('api/project/<str:pk>', views.getProject),
    path('api/projects/<str:topic_name>', views.getProjectsByTopic),
    path('api/user-projects/<str:pk>', views.getProjectsByUser),
    path('api/recent-activities', views.getRecentActivities),
    path('api/project-activities/<str:pk>', views.getProjectActivities),
    path('api/project-participants/<str:pk>', views.getProjectParticipants),
]
