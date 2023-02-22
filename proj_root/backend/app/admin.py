from django.contrib import admin
from .models import React, CalendarEvent

@admin.register(React)
class ReactAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', "schedule")
@admin.register(CalendarEvent)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_time', 'org_name', 'location', 'description')
