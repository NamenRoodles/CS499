from django.contrib import admin
from .models import React

@admin.register(React)
class ReactAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', "schedule")
