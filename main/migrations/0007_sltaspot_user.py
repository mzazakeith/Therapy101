# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-08-22 14:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_auto_20180822_1306'),
    ]

    operations = [
        migrations.AddField(
            model_name='sltaspot',
            name='user',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]