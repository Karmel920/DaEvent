from rest_framework.serializers import ModelSerializer
from .models import Project
from .models import Topic
from .models import User
from .models import UserDetails


class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class TopicSerializer(ModelSerializer):
    class Meta:
        model = Topic
        fields = ('name',)


class UserDetailsSerializer(ModelSerializer):
    class Meta:
        model = UserDetails
        fields = ('user', 'name', 'email', 'bio')
