from rest_framework.response import Response
from rest_framework.decorators import api_view
from csdb.models import Cities, Events, Users
from .serializers import CitiesSerializer, EventsSerializer, UsersSerializer


@api_view(['GET'])
def getCities(request):
    cities = Cities.objects.all()
    serializer = CitiesSerializer(cities, many=True)
    data = serializer.data
    return Response(data)

@api_view(['GET'])
def getEvents(request):
    cities = Events.objects.all()
    serializer = EventsSerializer(cities, many=True)
    data = serializer.data
    return Response(data)

@api_view(['GET'])
def getUsers(request):
    cities = Users.objects.all()
    serializer = UsersSerializer(cities, many=True)
    data = serializer.data
    return Response(data)
