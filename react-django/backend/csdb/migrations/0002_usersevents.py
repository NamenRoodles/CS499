# Generated by Django 4.1 on 2023-04-21 01:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('csdb', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UsersEvents',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('user_id', models.BigIntegerField()),
                ('event_id', models.BigIntegerField()),
            ],
            options={
                'db_table': 'users_events',
                'managed': False,
            },
        ),
    ]
