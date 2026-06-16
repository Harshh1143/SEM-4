from django.shortcuts import render
from .models import Music 
# Create your views here.
def song(request) :
    Song = Music.objects.all()
    song = request.GET.get('song')
    title = request.GET.get('title')
    year = request.GET.get('year')
    artist = request.GET.get('artist')

    if song :
        Song=Song.filter(song__icontains=song)
    if title : 
        Song = Song.filter(title__icontains=title)
    if year : 
        Song = Song.filter(year=year)
    if artist :
        Song = Song.filter(artist__icontains=artist)

    return render(request,'findmusic.html',{'song':Song})