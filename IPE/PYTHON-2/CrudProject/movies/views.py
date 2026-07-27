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
    movies = get_object_or_404(Movie,id=pk)
    return render(request,"detail.html",{"i":movies})

def edit(request,pk) :
    movie = get_object_or_404(Movie,id=pk)
    if request.method=="POST" :
        movie.title = request.POST.get('title')
        movie.director = request.POST.get('director')
        movie.rating = request.POST.get("rating")
        movie.release = request.POST.get('release')
        movie.description = request.POST.get('description')
        movie.save()
        return redirect("display")
    return render(request,"edit.html",{'movies':movie})

def create(request) :
    if request.method == "POST" :
        Movie.objects.create(
            title = request.POST['title'],
            director = request.POST['director'],
            rating = request.POST['rating'],
            release = request.POST['release'],
            description = request.POST['description']
        )

        return redirect("display")
    return render(request,'create.html')