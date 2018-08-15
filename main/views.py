from django.shortcuts import render, redirect
from main.forms import CurriculumForm, TreatmentPlanForm, NewProfileForm


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
    return render(request, 'welcome.html', locals())

