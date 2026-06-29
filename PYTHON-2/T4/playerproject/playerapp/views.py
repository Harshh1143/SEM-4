from django.shortcuts import render
from .models import Player
# Create your views here.
def home(requests) :
    search = requests.GET.get('name','')
    if search :
        play = Player.objects.filter(name__icontains=search)
    else :
        play = Player.objects.all()
    return render(requests,'home.html',{'data':play})

def welcome(requests) :
    return render(requests,'welcome.html')