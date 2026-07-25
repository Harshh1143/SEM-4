from django.db import models

# Create your models here.
class Book(models.Model) :
    title = models.CharField()
    author = models.CharField()
    date = models.DateField()
    price = models.FloatField()
    ISBN = models.CharField() 

    def __str__(self):
        return self.title 