# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-08-24 05:56
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_auto_20180824_0850'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='patientprofile',
            name='email',
        ),
    ]
