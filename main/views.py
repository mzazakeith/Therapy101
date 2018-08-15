from django.shortcuts import render, redirect

# Create your views here.
from .forms import NewProfileForm


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