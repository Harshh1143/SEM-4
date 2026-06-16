from django.urls import path 
from .views import list_book

urlpatterns = [
    path('',list_book,name='list_book')
]