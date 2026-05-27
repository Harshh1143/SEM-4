from django.urls import path
from app2.views import contact,hello

urlpatterns = [
    path('contact/',contact, name='contact'),
    path('hello/',hello, name='hello')
]