from django.shortcuts import render
from .models import Movie 
# Create your views here.
def home(request) :
    movies = Movie.objects.all()
    q = request.GET.get("q")
    if q :
        movies = Movie.objects.filter(name__icontains=q)

    return render(request,'home.html',{'m':movies})