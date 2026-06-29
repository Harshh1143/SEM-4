from django.shortcuts import render
from .models import Player
# Create your views here.
def home(requests) :
    data = Player.objects.all()
    return render(requests,'home.html',{'data':data})

def welcome(requests) :
    return render(requests,'welcome.html')