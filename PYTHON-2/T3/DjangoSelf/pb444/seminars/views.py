from django.shortcuts import render 
from .models import Seminars

def seminars(requests) :
    semi = Seminars.objects.all()

    search = requests.GET.get('title')

    if search : 
        semi = semi.filter(title__icontains=search)
    
    return render(requests,'seminars.html',{'title':semi})