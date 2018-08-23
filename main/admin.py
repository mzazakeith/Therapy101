from django.contrib import admin

from main.models import Curriculum, SLTASpot
from leaflet.admin import LeafletGeoAdmin

admin.site.register(Curriculum)
admin.site.register(SLTASpot, LeafletGeoAdmin)