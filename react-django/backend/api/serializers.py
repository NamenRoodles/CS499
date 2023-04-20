from rest_framework import serializers
from csdb.models import Cities, Events, Users

class CitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cities
        fields = '__all__'
class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = ['event', 'date', 'time', 'description', 'city_fk', 'venue', 'tags']

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'