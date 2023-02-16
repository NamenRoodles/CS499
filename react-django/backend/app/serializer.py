from rest_framework import serializers
from .models import *

class ReactSerializer(serializer.ModelSerializer):
    class Meta:
        model = React
        fields = ['user', 'schedule']