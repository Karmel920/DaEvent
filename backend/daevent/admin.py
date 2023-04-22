from django.contrib import admin
from django.contrib.admin import ModelAdmin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import Project, Topic, Message, CustomUser


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ("id", "email", "username", "date_joined", "last_login", "is_staff", "is_active",)
    list_filter = ("id", "email", "is_staff", "is_active",)
    readonly_fields = ("date_joined", "last_login")
    fieldsets = (
        ("User info", {"fields": ("email", "password", "username", "full_name", "bio")}),
        ("Permissions", {"fields": ("is_staff", "is_active", "groups", "user_permissions")}),
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": (
                "email", "username", "password1", "password2", "full_name", "bio", "is_staff",
                "is_active", "groups", "user_permissions"
            )}
         ),
    )
    search_fields = ("email", "username")
    ordering = ("email",)


class ProjectAdmin(ModelAdmin):
    list_display = ("id", "name", "topic", "host", "created",)
    readonly_fields = ("id",)
    fieldsets = (
        ("Project info", {"fields": ("host", "topic", "name", "description", "participants")}),
    )
    search_fields = ("name", "topic__name", "host_username")
    ordering = ("name",)


class TopicAdmin(ModelAdmin):
    list_display = ("name",)
    readonly_fields = ("id",)
    fieldsets = (
        ("Topic info", {"fields": ("name",)}),
    )
    search_fields = ("name",)
    ordering = ("name",)


class MessageAdmin(ModelAdmin):
    list_display = ("id", "user", "body", "project", "created",)
    readonly_fields = ("id",)
    fieldsets = (
        ("Message info", {"fields": ("user", "project", "body")}),
    )
    search_fields = ("user__username", "body", "project__name")
    ordering = ("project",)


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Topic, TopicAdmin)
admin.site.register(Message, MessageAdmin)
