from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.getRoutes),
    path('api/topics', views.getTopics),
    path('api/add-topics', views.addTopic),
    path('api/projects', views.getProjects),
    path('api/projects/<str:pk>', views.getProject),
]
