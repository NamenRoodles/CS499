from django.urls import path
from . import views

urlpatterns = [
    path('cities/', views.getCities),
    path('events/', views.getEvents),
    path('users/', views.getUsers),
    path('addUser/', views.makeNewUser),
    path('gtc/', views.getTheCalendar, name='get_calendar'),
    path('aot/', views.addEventToUser)
]
