# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-08-22 13:06
from __future__ import unicode_literals

from django.db import migrations
import djgeojson.fields


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_auto_20180822_1303'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sltaspot',
            name='geom',
            field=djgeojson.fields.PointField(),
        ),
    ]
