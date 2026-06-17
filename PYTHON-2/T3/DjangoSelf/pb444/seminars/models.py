from django.db import models

class Seminars(models.Model) :
    title = models.CharField(max_length=100)
    date = models.DateField()
    organizer = models.CharField(max_length=100)
    department = models.CharField(max_length=100)

    def __str__ (self) :
        return self.title