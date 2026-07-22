from django.shortcuts import render,redirect,get_object_or_404 
from .models import Cricket
# Create your views here.
def homepage(request) :
    players = Cricket.objects.all()
    return render(request,'dashboard.html',{'players':players})

def player_detail(request,pk) :
    players = get_object_or_404(Cricket,pk=pk)
    return render(request,'detail.html',{'players' : players})

def add_player(request) :
    if request.method=="POST":
        Cricket.objects.create(
            name = request.POST['name'],
            country = request.POST['country'],
            bat_style = request.POST['bat_style'],
            bowl_style = request.POST['bowl_style'],
            age = request.POST['age'],
            runs = request.POST['runs'],
            wicket = request.POST['wicket']
        )
        return redirect('home')
    return render(request,'add.html')