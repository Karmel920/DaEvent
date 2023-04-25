from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.forms import ModelForm

from .models import CustomUser, Project, Message


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ("email", "username", "full_name", "bio")


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = CustomUser
        fields = ("avatar", "bio", "full_name")


class ProjectForm(ModelForm):
    class Meta:
        model = Project
        fields = ("name", "description")


class MessageForm(ModelForm):
    class Meta:
        model = Message
        fields = ("body",)
