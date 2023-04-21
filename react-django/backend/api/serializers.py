from rest_framework import serializers
from csdb.models import Cities, Events, Users, UsersEvents

class CitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cities
        fields = '__all__'
class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = ['event', 'date', 'time', 'description', 'venue', 'tags', 'event_id']

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

class UESerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersEvents
        fields = '__all__'
