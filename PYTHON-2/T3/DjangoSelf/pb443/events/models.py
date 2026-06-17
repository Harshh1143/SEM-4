from django.db import models

# Create your models here.
class Events (models.Model) :
    event = models.CharField(max_length=100)
    date = models.DateField()
    location = models.CharField(max_length=100)
    category = models.CharField(max_length=100)

    def __str__(self) :
        return self.event 