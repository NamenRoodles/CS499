from django.db import models

# Create your models here.

class Member(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    phone = models.IntegerField(null=True)
    DOB = models.DateField(null=True)


    def __str__(self):
        return self.title
