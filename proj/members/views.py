from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from .models import Member

# Create your views here.

def member_list_view(request):
    member_objects = Member.objects.all()
    context = {
        'member_objects': member_objects
    }
    return render(request, "memberlist.html", context)

def details(request, id):
    mymember = Member.objects.get(id=id)
    template = loader.get_template('details.html')
    context = {
        'mymember': mymember,
    }
    return HttpResponse(template.render(context, request))  

def main(request):
    template = loader.get_template("main.html")
    return HttpResponse(template.render())

def testing(request):
    template = loader.get_template("template.html")
    context = {
        "fruits": ["Apple", "Banana", "Cherry"],
    }
    return HttpResponse(template.render(context, request))