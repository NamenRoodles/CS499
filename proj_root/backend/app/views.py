from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializer import *
from rest_framework.response import Response
from json import JSONDecodeError
from django.http import JsonResponse
from rest_framework.parsers import JSONParser

# Create your views here.
"""
My understanding of the code below:
This is an actual webpage view that django renders.
On this webpage it retrieves attributes of output.user... ect. until
it goes through all of them
The post function adds data into the already existing database... is what I think happens
Not 100% sure though..
"""
class ReactView(APIView):
    serializer_class = ReactSerializer
    def get_serializer_context(self):
        return {
            'request': self.request,
            'format': self.format_kwarg,
            'view': self
        }
    def get_serializer(self, *args, **kwargs):
        kwargs['context'] = self.get_serializer_context()
        return self.serializer_class(*args, **kwargs)

    def get(self, request):
        output = [{"user": output.user,
                   "schedule": output.schedule}
                   for output in React.objects.all()]
        return Response(output)
    def post(self,request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)  
        
    def poster(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = ReactSerializer(data=data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return JsonResponse({'result': "error","message": 'Json decoding error'}, status= 400)

class EventView(APIView):
    serializer_class = EventSerializer
    def get_serializer_context(self):
        return {
            'request': self.request,
            'format': self.format_kwarg,
            'view': self
        }
    def get_serializer(self, *args, **kwargs):
        kwargs['context'] = self.get_serializer_context()
        return self.serializer_class(*args, **kwargs)

    def get(self, request):
        output = [{"title": output.title,
                   "date_time": output.date_time,
                   "org_name": output.org_name,
                   "location": output.location,
                   "description": output.description}
                   for output in CalendarEvent.objects.all()]
        return Response(output)
    def post(self,request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)  
        
    def poster(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = EventSerializer(data=data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return JsonResponse({'result': "error","message": 'Json decoding error'}, status= 400)

