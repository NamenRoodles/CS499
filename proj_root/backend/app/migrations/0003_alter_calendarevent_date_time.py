# Generated by Django 4.1 on 2023-02-22 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_calendarevent'),
    ]

    operations = [
        migrations.AlterField(
            model_name='calendarevent',
            name='date_time',
            field=models.CharField(max_length=1000),
        ),
    ]
