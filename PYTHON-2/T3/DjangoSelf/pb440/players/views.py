from django.shortcuts import render
from .models import Player
# Create your views here.
def player(request):
    player = Player.objects.all()

    return render(request,'players.html',{'player':player})