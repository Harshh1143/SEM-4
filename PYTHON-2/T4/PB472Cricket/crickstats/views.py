from django.shortcuts import render,redirect,get_object_or_404 
from .models import Cricket
# Create your views here.
def homepage(request) :
    players = Cricket.objects.all()
    return render(request,'dashboard.html',{'players':players})

def player_detail(request,pk) :
    players = get_object_or_404(Cricket,pk=pk)
    return render(request,'detail.html',{'i' : players})

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
        return redirect('homepage')
    return render(request,'add.html')

def delete(request,pk) :
    players = get_object_or_404(Cricket,pk=pk)
    players.delete()

    return redirect('homepage')

def edit_player(request,pk) :
    players = get_object_or_404(Cricket,pk=pk)
    if request.method == "POST" :
        players.name = request.POST['name']
        players.country = request.POST['country']
        players.bat_style = request.POST['bat_style']
        players.bowl_style = request.POST['bowl_style']
        players.age = request.POST['age']
        players.runs = request.POST['runs']
        players.wicket = request.POST['wicket']

        players.save()
        return redirect('homepage')
    return render(request,'edit.html',{'player':players})