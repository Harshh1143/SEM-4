from django.shortcuts import render,redirect,get_object_or_404
from .models import Player
# Create your views here.
def home(request) :
    players = Player.objects.all()
    query = request.GET.get('q')

    if query :
        players = Player.objects.filter(name__icontains=query)
    return render(request,'home.html',{'players':players})
def welcome(request) :
    return render(request,"welcome.html")
def add(request) :
    if request.method=="POST" :
        Player.objects.create(
            name = request.POST['name'],
            test_innings = request.POST['test_innings'],
            runs = request.POST['runs']
        )
        return redirect('home')
    return render(request,'add.html')

def edit(request,pk) :
    players = get_object_or_404(Player,pk=pk)
    if request.method=="POST" :
        players.name = request.POST['name']
        players.test_innings = request.POST['test_innings']
        players.runs = request.POST['runs']

        players.save()
        return redirect('home')
    return render(request,'edit.html',{'players':players})

def delete(request,pk) :
    players = get_object_or_404(Player,pk=pk)
    players.delete()
    return redirect('home')
