from django.db import models

# Create your models here.
class React(models.Model):
    user = models.CharField(max_length=50)
    schedule = models.FileField()
    def __str__(self):
        return f'{self.title}'
class CalendarEvent(models.Model):
    title = models.CharField(max_length=150)
    date_time = models.CharField(max_length=1000)
    org_name = models.CharField(max_length=1000)
    location = models.CharField(max_length=1000)
    description = models.CharField(max_length=1000)
    def __str__(self):
        return f'{self.title}'