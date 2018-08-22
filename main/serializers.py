from rest_framework import serializers
from main.models import Curriculum, TreatmentPlan, PatientProfile, AssistantProfile


class CurriculumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curriculum
        exclude = ['uploaded_at', 'patient']


class TreatmentPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = TreatmentPlan
        exclude = ['uploaded_at', 'patient']


class PatientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientProfile
        exclude = ['user']


class AssistantProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssistantProfile
        exclude = ['user']
