from django.db import models

# Create your models here.
class Music(models.Model) :
    song = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    year = models.IntegerField()
    album = models.CharField(max_length=100)

    def __str__ (self) :
        return self.song