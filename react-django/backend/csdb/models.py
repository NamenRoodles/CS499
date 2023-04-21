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

class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)
    name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()
    first_name = models.CharField(max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    action_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'



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
    venue = models.CharField(max_length=255, blank=True, null=True)
    tags = ArrayField(models.CharField(max_length=50, blank = True, null=True))  # This field type is a guess.
    event_id = models.AutoField(primary_key=True)

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


class UsersEvents(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.BigIntegerField()
    event_id = models.BigIntegerField()

    class Meta:
        managed = False
        db_table = 'users_events'



