from django.urls import path 
from .views import player
urlpatterns=[
    path("",player,name='player')
]