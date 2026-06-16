from django.db import models

# Create your models here.
class Player(models.Model) :
    player = models.CharField(max_length=100)
    runs = models.IntegerField()
    balls = models.IntegerField()
    four = models.IntegerField()
    six = models.IntegerField()
    sr = models.FloatField()
    team = models.CharField(max_length=100)
    opp = models.CharField(max_length=100)
        
    def __self__(self):
        self.player