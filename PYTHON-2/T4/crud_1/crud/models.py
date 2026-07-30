from django.db import models

# Create your models here.
class Student(models.Model) :
    name = models.CharField() 
    div = models.CharField()
    school = models.CharField()
    rank = models.IntegerField()
    marks = models.IntegerField()

    def __str__(self):
        self.name 
