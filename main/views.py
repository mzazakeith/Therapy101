from django.http import Http404
from django.shortcuts import render, redirect
from main.forms import CurriculumForm, TreatmentPlanForm, NewProfileForm
from rest_framework.views import APIView
from rest_framework.response import Response
from main.models import Curriculum, TreatmentPlan, PatientProfile, AssistantProfile, SLTASpot
from main.serializers import CurriculumSerializer, TreatmentPlanSerializer, PatientProfileSerializer, \
    AssistantProfileSerializer


def curriculum_upload(request):
    if request.method == 'POST':
        form = CurriculumForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = CurriculumForm()
    return render(request, 'upload/curriculum.html', {'form': form})


def treatment_upload(request):
    if request.method == 'POST':
        form = TreatmentPlanForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = TreatmentPlanForm()
    return render(request, 'upload/treatment.html', {'form': form})


def new_profile(request):
    current_user = request.user

    if request.method == 'POST':
        form = NewProfileForm(request.POST, request.FILES)
        if form.is_valid():
            profile = form.save(commit=False)
            profile.user = current_user
            profile.save()
            return redirect('welcome')
    else:
        form = NewProfileForm()
    return render(request, 'new_profile.html', {"form": form})


def welcome(request):
    title = "welcome"
    locations = SLTASpot.objects.all()
    return render(request, 'welcome.html', locals())


class CurriculumList(APIView):
    def get(self, request, format=None):
        curriculums = Curriculum.objects.all()
        serializer = CurriculumSerializer(curriculums, many=True)
        return Response(serializer.data)


class CurriculumDetail(APIView):
    def get_object(self, pk):
        try:
            return Curriculum.objects.get(pk=pk)
        except Curriculum.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        curriculum = self.get_object(pk)
        serializer = CurriculumSerializer(curriculum)
        return Response(serializer.data)


class TreatmentPlanList(APIView):
    def get(self, request, format=None):
        plans = TreatmentPlan.objects.all()
        serializer = TreatmentPlanSerializer(plans, many=True)
        return Response(serializer.data)


class TreatmentPlanDetail(APIView):
    def get_object(self, pk):
        try:
            return TreatmentPlan.objects.get(pk=pk)
        except TreatmentPlan.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        plan = self.get_object(pk)
        serializer = TreatmentPlanSerializer(plan)
        return Response(serializer.data)


class PatientProfileList(APIView):
    def get(self, request, format=None):
        patientprofiles = PatientProfile.objects.all()
        serializer = PatientProfileSerializer(patientprofiles, many=True)
        return Response(serializer.data)


class PatientProfileDetail(APIView):
    def get_object(self, pk):
        try:
            return PatientProfile.objects.get(pk=pk)
        except PatientProfile.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        patientprofile = self.get_object(pk)
        serializer = PatientProfileSerializer(patientprofile)
        return Response(serializer.data)


class AssistantProfileList(APIView):
    def get(self, request, format=None):
        assistantprofiles = AssistantProfile.objects.all()
        serializer = AssistantProfileSerializer(assistantprofiles, many=True)
        return Response(serializer.data)


class AssistantProfileDetail(APIView):
    def get_object(self, pk):
        try:
            return AssistantProfile.objects.get(pk=pk)
        except AssistantProfile.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        assistantprofile = self.get_object(pk)
        serializer = AssistantProfileSerializer(assistantprofile)
        return Response(serializer.data)


def therapist_dash(request):
    locations = SLTASpot.objects.all()
    return render(request, 'therapistdash/therapist-dash.html', locals())


def patient(request, ownerpatient):
    patient = PatientProfile.objects.get(id=ownerpatient)
    import datetime
    age = int((datetime.date.today() - patient.birthday).days / 365.25)
    return render(request, 'therapistdash/patient.html', locals())


def curriculumlist(request):
    current_user = request.user
    if current_user.is_slt:
        curriculums = Curriculum.objects.all()
    else:
        curriculums = Curriculum.objects.filter(doctor=current_user)
    return render(request, 'therapistdash/curriculums.html', locals())


def planlist(request):
    return render(request, 'therapistdash/planlist.html')


def assistantlist(request):
    return render(request, 'therapistdash/assistantlist.html')


def patientlist(request):
    current_user = request.user
    if current_user.is_slt:
        patients = PatientProfile.objects.filter(slt=current_user)
    else:
        profile = AssistantProfile.objects.get(user=current_user)
        patients = PatientProfile.objects.filter(slta=profile)
    return render(request, 'therapistdash/patientlist.html', locals())


def assistant_dash(request):
    return render(request, 'therapistdash/assistantdash.html')


def assistant(request, user_id):
    assistant = AssistantProfile.objects.get(user=user_id)
    profile = AssistantProfile.objects.get(user=user_id)
    patients = PatientProfile.objects.filter(slta=profile)
    return render(request, 'therapistdash/assistant.html', locals())


def assistantpatients(request, user_id):
    profile = AssistantProfile.objects.get(user=user_id)
    patients = PatientProfile.objects.filter(slta=profile)
    return render(request, 'therapistdash/assistantspatients.html', locals())
