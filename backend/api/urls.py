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
    path('api/add-topics', views.addTopic),
    path('api/projects', views.getProjects),
    path('api/projects/<str:pk>', views.getProject),
]
