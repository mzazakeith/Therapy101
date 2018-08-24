from django import forms

from main.models import Curriculum, TreatmentPlan, SLTASpot
from leaflet.forms.fields import PointField


class CurriculumForm(forms.ModelForm):
    class Meta:
        model = Curriculum
        exclude = ['uploaded_at', 'patient','doctor']


class TreatmentPlanForm(forms.ModelForm):
    class Meta:
        model = TreatmentPlan
        exclude = ['uploaded_at', 'patient']


from .models import PatientProfile


class NewProfileForm(forms.ModelForm):
    class Meta:
        model = PatientProfile
        exclude = ['user']
