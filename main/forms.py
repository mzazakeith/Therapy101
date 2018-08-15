
from django import forms

from main.models import Curriculum, TreatmentPlan


class CurriculumForm(forms.ModelForm):
    class Meta:
        model = Curriculum
        fields = ('description', 'document', )


class TreatmentPlanForm(forms.ModelForm):
    class Meta:
        model = TreatmentPlan
        fields = ('description', 'document', )


from .models import PatientProfile


class NewProfileForm(forms.ModelForm):
    class Meta:
        model = PatientProfile
        exclude = ['user']

