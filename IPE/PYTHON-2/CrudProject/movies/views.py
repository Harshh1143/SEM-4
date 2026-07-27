from django.shortcuts import render,redirect,get_object_or_404
from .models import Movie
# Create your views here.
def movie(request) :
    movies = Movie.objects.all()
    q = request.GET.get("q")

    if q : 
        movies = Movie.objects.filter(title__icontains=q)
    return render(request,'display.html',{'movies':movies})

def detail(request,pk) :
    movies = get_object_or_404(Movie,pk=pk)
    return render(request,"detail.html",{"movies":movies})

def edit(request,pk) :
    movies = get_object_or_404(Movie,pk=pk)
    if request.method=="POST" :
        movie.title = request.POST['title']
        movie.director = request.POST['director']
        movie.rating = request.POST["rating"]
        movie.release = request.POST['release']
        movie.description = request.POST['description']

        return redirect("display")
    return render(request,"edit.html",{'movies':movies})

def create(request) :
    if request.method == "POST" :
        Movie.objects.create(
            title = request.POST['title'],
            director = request.POST['director'],
            rating = request.POST['rating'],
            release = request.POST['release'],
            description = request.POST['description']
        )

        return redirect("detail")
    return render(request,'create.html')