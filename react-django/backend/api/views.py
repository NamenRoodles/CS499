from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from django.views.decorators.http import require_GET
from icalendar import Calendar, Event

from csdb.models import Cities, Events, Users, UsersEvents
from .serializers import CitiesSerializer, EventsSerializer, UsersSerializer, UESerializer


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

@api_view(['POST'])
#this will require some information from the client, so what events are the ones to add
#temporarily, this will just act as a query with the given calendar
def addEventToUser(request):
    #addEvent_data = JSONParser().parse(request)
    getEUdata = JSONParser.parse().parse(request)
    useremail = getEUdata["email"]
    user = Users.objects.get(email=useremail)
    userid = user.uid
    usereventlist = getEUdata["events"]
    for evid in usereventlist:
        entry = UsersEvents(user_id=userid , event_id = evid)
        entry.save()
    return HttpResponse("no problems here bub")

@api_view(['POST'])
def getTheCalendar(request):
    reqCalendarData = JSONParser().parse(request) #dictionary? lets hope so
    useremail = reqCalendarData["email"]
    
@api_view(['POST'])
def makeNewUser(request):
    newUser_data = JSONParser().parse(request)
    newUser = UsersSerializer(data=newUser_data)
    if newUser.is_valid():
        newUser.save()



