from django.urls import path 
from .views import seminars

urlpatterns = [
    path('',seminars,name='seminar')
]