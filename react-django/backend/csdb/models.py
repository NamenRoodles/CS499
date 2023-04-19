# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as lazy
import re



class Cities(models.Model):
    city_id = models.AutoField(primary_key=True)
    city = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'cities'

class Events(models.Model):
    # Author for this lovely regex:
    # Greg Burns
    # Source	http://www.dotnetjunkies.com/HowTo/7D7E307A-6CA1-4BB1-AD21-CE45A1CD149D.dcik
    # abbreviated from original regex so that am and pm are case insensitive
#(^([0-9]|[0-1][0-9]|[2][0-3]):([0-5][0-9])(\s{0,1})(AM|PM|am|pm|aM|Am|pM|Pm{2,2})$)|(^([0-9]|[1][0-9]|[2][0-3])(\s{0,1})(AM|PM|am|pm|aM|Am|pM|Pm{2,2})$))
    #00:00:00
    #(^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$)

    #creating a new validator that accepts the time format passed in, previous one does not and throws an error
    def validate_time(self, value):
        time_regex = re.compile(r"(^[0-9]|[0-1][0-9][2][0-3]):([0-5][0-9])(\s{0,1})\
                                (am|pm{2,2})$)|(^([0-9]|[1][0-9]|[2][0-3])\
                                (\s{0,1})(am|pm{2,2}$)|(^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$))", re.IGNORECASE)
        time_match = re.match(time_regex, value)
        if time_match is None:
            raise ValidationError(
                lazy('%(value)s is not a valid time format'),
                params={'value': value},
            )


    event = models.CharField(max_length=255, blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    time = models.CharField(max_length=255, blank=True, null=True, validators=[validate_time])
    description = models.TextField(blank=True, null=True)
    city_fk = models.ForeignKey(Cities, models.DO_NOTHING, db_column='city_fk', blank=True, null=True)
    venue = models.CharField(max_length=255, blank=True, null=True)
    hash = models.DecimalField(primary_key=True, max_digits=65535, decimal_places=65535)
    tags = ArrayField(models.CharField(max_length=50, blank = True, null=True))  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'events'


class Users(models.Model):
    uid = models.BigIntegerField(primary_key=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    username = models.CharField(max_length=255, blank=True, null=True)
    calendar = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'users'



