
from django import forms

from .models import PatientProfile


class NewProfileForm(forms.ModelForm):
    class Meta:
        model = PatientProfile
        exclude = ['user']