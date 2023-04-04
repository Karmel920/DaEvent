from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import Project, Topic, Message, CustomUser


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ("email", "username", "date_joined", "last_login", "is_staff", "is_active",)
    list_filter = ("email", "is_staff", "is_active",)
    readonly_fields = ("date_joined", "last_login")
    fieldsets = (
        (None, {"fields": ("email", "password", "username", "full_name", "bio")}),
        ("Permissions", {"fields": ("is_staff", "is_active", "groups", "user_permissions")}),
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": (
                "email", "username", "password1", "password2", "full_name", "bio",  "is_staff",
                "is_active", "groups", "user_permissions"
            )}
        ),
    )
    search_fields = ("email", "username")
    ordering = ("email",)


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Project)
admin.site.register(Topic)
admin.site.register(Message)
