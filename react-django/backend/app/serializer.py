from rest_framework import serializers
from rest_framework.fields import CharField, FileField

from .models import *

class ReactSerializer(serializers.ModelSerializer):
    user = React.user
    schedule = React.schedule

    class Meta:
        model = React
        fields = ['user', 'schedule']
