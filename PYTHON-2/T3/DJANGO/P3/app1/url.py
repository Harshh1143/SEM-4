from django.urls import path
from app1.views import home,about
from django.urls import path,include
urlpatterns = [
    path('home/',home, name='home'),
    path('about/',about, name='about')
]