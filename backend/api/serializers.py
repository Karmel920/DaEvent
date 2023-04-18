from django.db.models import Count
from rest_framework import serializers
from daevent.models import Topic, Project, Message, CustomUser


class TopicListSerializer(serializers.ModelSerializer):
    topic_projects_count = serializers.SerializerMethodField()

    class Meta:
        model = Topic
        fields = ['id', 'name', 'topic_projects_count']

    def get_topic_projects_count(self, obj):
        return obj.project_set.count()


class TopicSerializer(serializers.Serializer):
    all_projects_count = serializers.SerializerMethodField()

    def get_all_projects_count(self, obj):
        return Project.objects.all().count()

    def to_representation(self, instance):
        return {
            'all_count': self.get_all_projects_count(instance),
            'topics': TopicListSerializer(instance, many=True).data
        }


class ProjectSerializer(serializers.ModelSerializer):
    host = serializers.StringRelatedField()
    topic = serializers.StringRelatedField()
    participants_count = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'name', 'description', 'timesince', 'host', 'topic', 'participants_count']

    def get_participants_count(self, obj):
        return obj.participants.count()


class RecentMessageSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    project = serializers.StringRelatedField()
    body_short = serializers.SerializerMethodField()

    class Meta:
        model = Message
        fields = ['id', 'body_short', 'user', 'project', 'timesince']

    def get_body_short(self, obj):
        if len(obj.body[:30]) == 30:
            return f'{obj.body[:30]}...'
        return obj.body[:30]


class MessageSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    project = serializers.StringRelatedField()

    class Meta:
        model = Message
        fields = ['id', 'body', 'user', 'project', 'timesince']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'full_name', 'username']


class ParticipantsSerializer(serializers.ModelSerializer):
    participants = UserSerializer(many=True)
    participants_count = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'participants_count', 'participants']

    def get_participants_count(self, obj):
        return obj.participants.count()
