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

@api_view(['GET'])
def getTheCalendar(request):
    # reqCalendarData = JSONParser().parse(request) #dictionary? lets hope so
    # useremail = reqCalendarData["email"]
    calendar = r"""BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ChatGPT//Event Calendar//EN
CALSCALE:GREGORIAN

BEGIN:VEVENT
DTSTART;TZID=America/Denver:20230411T200000
DTEND;TZID=America/Denver:20230411T220000
SUMMARY:KaraSmokey Karaoke Club
LOCATION:Speak Easy Vape Lounge and Cannabis Club, Colorado Springs, CO
DESCRIPTION:Drinking, Music
END:VEVENT

BEGIN:VEVENT
DTSTART;TZID=America/Denver:20230412T080000
DTEND;TZID=America/Denver:20230412T090000
SUMMARY:Guatemala: Our Culture is Our Resistance Gallery Exhibition & Lecture
LOCATION:Downtown Campus, Studio West Gallery, Colorado Springs, CO
DESCRIPTION:Documentary photographer Jonathan Moller shares his powerful work. Show runs March 13-April 21.The college will host a reception on Friday, April 7, from 5-8pm. The artist will speak about the struggles of the Guatemalan people and his artistic process at 6 pm. All welcome, admission is free, light refreshments provided. Qs: benjy.davies@pikespeak.edu Virtual Event Link: https://www.pikespeak.edu/academics/studio-west/art-gallery.php\nArt, Educational
END:VEVENT

BEGIN:VEVENT
DTSTART;TZID=America/Denver:20230412T093000
DTEND;TZID=America/Denver:20230412T113000
SUMMARY:Cheyenne Mountain Newcomers Club
LOCATION:Broadmoor Community Church, Colorado Springs, CO
DESCRIPTION:Cheyenne Mountain Newcomers Club is a social club for women of all ages and backgrounds residing in the Colorado Springs area. We are not religiously or politically affiliated. Our purpose is to welcome women new or long time residents of Colorado Springs. We have multiple activity groups ranging from but not limited to, reading clubs, hiking clubs, gourmet food and games. Find us on facebook at Cheyenne Mountain Newcomers Club or attend one of our monthly meetings. Annual member dues are $30/year. Two events can be attended before joining.
END:VEVENT"""





    response = HttpResponse(calendar, content_type='text/calendar')
    response['Content-Disposition'] = 'attackment; filename="calendar.ics"'
    return response


    
@api_view(['POST'])
def makeNewUser(request):
    newUser_data = JSONParser().parse(request)
    newUser = UsersSerializer(data=newUser_data)
    if newUser.is_valid():
        newUser.save()



