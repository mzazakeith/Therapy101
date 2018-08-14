from django.contrib.auth import get_user_model
from django.shortcuts import render, redirect

from authentication.forms import SLTSignupForm, SLTASignupForm, ParentSignupForm

User = get_user_model()


def slt_signup(request):
    if request.method == 'POST':
        form = SLTSignupForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = True
            user.is_student = True
            user.is_teacher = False
            user.save()
            return redirect("/")
    else:
        form = SLTSignupForm()
    return render(request, 'registration/slt_signup.html', {'form': form})


def slta_signup(request):
    if request.method == 'POST':
        form = SLTASignupForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = True
            user.is_student = True
            user.is_teacher = False
            user.save()
            return redirect("/")
    else:
        form = SLTASignupForm()
    return render(request, 'registration/slta_signup.html', {'form': form})


def parent_signup(request):
    if request.method == 'POST':
        form = ParentSignupForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = True
            user.is_student = True
            user.is_teacher = False
            user.save()
            return redirect("/")
    else:
        form = ParentSignupForm()
    return render(request, 'registration/parent_signup.html', {'form': form})