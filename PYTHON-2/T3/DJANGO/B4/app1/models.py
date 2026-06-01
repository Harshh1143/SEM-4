from django.db import models

# Create your models here.
class Student(models.Model):
    name=models.CharField(max_length=100)
    roll=models.IntegerField()
    profile=models.URLField(max_length=200)
    email=models.EmailField(max_length=254)
    marks=models.IntegerField()
    birthdate = models.DateField(auto_now=False)

    def __str__(self):
        return self.name