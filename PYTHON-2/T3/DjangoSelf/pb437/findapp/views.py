from django.shortcuts import render
from .models import Movie
# Create your views here.
def home(request) :
    movies = Movie.objects.all()

    title=request.GET.get('title')
    year = request.GET.get('year')
    director = request.GET.get('director')

    if title :
        movies = movies.filter(title__icontains=title)

    if year : 
        movies = movies.filter(year__icontains=year)

    if director :
        movies = movies.filter(director__icontains=director)

    return render(request,'moviefind.html',{'movies':movies})