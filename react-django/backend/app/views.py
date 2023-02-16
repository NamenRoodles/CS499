from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializer import *
from rest_framework.response import Response


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
