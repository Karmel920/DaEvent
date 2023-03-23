from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from daevent import views

router = routers.DefaultRouter()
router.register(r'topics', views.TopicView, 'topic')
router.register(r'projects', views.ProjectView, 'project')
router.register(r'users', views.UserDetailsView, 'user')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
