from django.urls import path 
from .views import home,info,add
urlpatterns = [
    path("",home,name='home'),
    path('info/<int:id>/',info,name='info'),
    path('add/',add,name='add')
]