from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from daevent.models import Topic, Project, Message, CustomUser
from rest_framework.validators import UniqueValidator


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
    host = serializers.SerializerMethodField()
    topic = serializers.StringRelatedField()
    participants_count = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'name', 'description', 'timesince', 'host', 'topic', 'participants_count']

    def get_host(self, obj):
        return {'id': obj.host.id, 'username': str(obj.host)}

    def get_participants_count(self, obj):
        return obj.participants.count()


class RecentMessageSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    project = serializers.SerializerMethodField()
    body_short = serializers.SerializerMethodField()

    class Meta:
        model = Message
        fields = ['id', 'body_short', 'user', 'project', 'timesince']

    def get_user(self, obj):
        return {'id': obj.user.id, 'username': str(obj.user)}

    def get_project(self, obj):
        return {'id': obj.project.id, 'name': str(obj.project)}

    def get_body_short(self, obj):
        if len(obj.body[:30]) == 30:
            return f'{obj.body[:30]}...'
        return obj.body[:30]


class MessageSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    project = serializers.StringRelatedField()

    class Meta:
        model = Message
        fields = ['id', 'body', 'user', 'project', 'timesince']

    def get_user(self, obj):
        return {'id': obj.user.id, 'username': str(obj.user)}


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'full_name', 'username', 'bio']


class ParticipantsSerializer(serializers.ModelSerializer):
    participants = UserSerializer(many=True)
    participants_count = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'participants_count', 'participants']

    def get_participants_count(self, obj):
        return obj.participants.count()


class UserRegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=CustomUser.objects.all())]
            )
    username = serializers.CharField(
            max_length=32,
            required=True,
            validators=[UniqueValidator(queryset=CustomUser.objects.all())]
            )
    password1 = serializers.CharField(min_length=8)
    password2 = serializers.CharField(min_length=8)

    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'username', 'password1', 'password2')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password1 = validated_data.pop('password1')
        password2 = validated_data.pop('password2')
        if password1 != password2:
            raise serializers.ValidationError({'password': 'Passwords must match.'})
        user = CustomUser.objects.create_user(validated_data['email'], validated_data['username'], password1)
        return user


class UserChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(min_length=8, required=True)
    new_password = serializers.CharField(min_length=8, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(min_length=8, required=True, validators=[validate_password])

    def validate(self, data):
        new_password = data.get('new_password')
        confirm_password = data.get('confirm_password')
        if new_password != confirm_password:
            raise serializers.ValidationError("New password and confirm password does not match")
        return data
