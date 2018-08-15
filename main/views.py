from django.shortcuts import render, redirect
from main.forms import CurriculumForm, TreatmentPlanForm


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



