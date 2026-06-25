from django.shortcuts import render,redirect
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.contrib.auth import login,logout
from django.contrib.auth.decorators import login_required

# Create your views here.
def dashboard(requests) :
    return render (requests,'dashboard.html')