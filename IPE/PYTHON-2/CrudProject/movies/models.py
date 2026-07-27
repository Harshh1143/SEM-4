from django.db import models

# Create your models here.
class Movie(models.Model) :
    title = models.CharField()
    director = models.CharField()
    rating = models.FloatField()
    release = models.DateField()
    description = models.TextField()

    def __str__(self):
        return self.title 