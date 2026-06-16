from django.urls import path 
from pb431.views import home 
from . import views
urlpatterns = [
    path('search/',views.home,name='search'),
]