from django.db import models

# Create your models here.
class Movie(models.Model) :
    name = models.CharField()
    actor = models.CharField()
    date = models.DateField()

    def __str__(self):
        return self.name