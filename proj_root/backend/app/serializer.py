from rest_framework import serializers
from rest_framework.fields import CharField, FileField

from .models import *

class ReactSerializer(serializers.ModelSerializer):
    user = React.user
    schedule = React.schedule

    class Meta:
        model = React
        fields = ['user', 'schedule']
class EventSerializer(serializers.ModelSerializer):
    title = CalendarEvent.title
    date_time = CalendarEvent.date_time
    org_name = CalendarEvent.org_name
    location = CalendarEvent.location
    description = CalendarEvent.description
    class Meta:
        model = CalendarEvent
        fields = ['title', 'date_time', 'org_name', 'location', 'description']
