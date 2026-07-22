from django.db import models

class Cricket(models.Model) :
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    bat_style = models.CharField(max_length=100)
    bowl_style = models.CharField(max_length=100)
    age = models.IntegerField()
    runs = models.IntegerField()
    wicket = models.IntegerField()

    def __str__(self):
        return self.name 