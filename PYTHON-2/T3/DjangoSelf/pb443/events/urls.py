from django.urls import path 
from .views import upcoming

urlpatterns = [
    path("",upcoming,name='upcoming')
]