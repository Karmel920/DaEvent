from django.contrib import admin

from .models import Project, Topic, Message, UserDetails

admin.site.register(UserDetails)
admin.site.register(Project)
admin.site.register(Topic)
admin.site.register(Message)
