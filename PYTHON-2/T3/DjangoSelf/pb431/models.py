from django.db import models

# Create your models here.
class Student(models.Model) :
    roll_no = models.IntegerField(unique=True)
    name = models.CharField(max_length=100)

    def __str__ (self) :
        return self.name