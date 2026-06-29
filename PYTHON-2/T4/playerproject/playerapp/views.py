from django.shortcuts import render,redirect
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

def add (requests) :
    if requests.method=='POST' :
        name = requests.POST['name']
        innings = requests.POST['innings']
        runs = requests.POST['runs']
        Player.objects.create(name=name,innings=innings,runs=runs)
        return redirect('home')
    return render(requests,'add.html')