from django.urls import path
from . import views

urlpatterns = [
    path('cities/', views.getCities),
    path('events/', views.getEvents),
    path('users/', views.getUsers)
]
