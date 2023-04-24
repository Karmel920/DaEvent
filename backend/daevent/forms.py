from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.forms import ModelForm

from .models import CustomUser, Project


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ("email", "username", "full_name", "bio")


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ("email", "username", "full_name", "bio")


class ProjectForm(ModelForm):
    class Meta:
        model = Project
        fields = ("name", "description")
