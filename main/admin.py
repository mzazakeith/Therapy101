from django.contrib import admin

from main.models import Curriculum, SLTASpot, PatientProfile, AssistantProfile
from leaflet.admin import LeafletGeoAdmin

admin.site.register(Curriculum)
admin.site.register(SLTASpot, LeafletGeoAdmin)
admin.site.register(PatientProfile)
admin.site.register(AssistantProfile)