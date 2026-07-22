from django.urls import path 
from . import views 

urlpatterns = [
    path("",views.home,name='home'),
    path("edit/<int:pk>/",views.edit,name='edit'),
    path("welcome/",views.welcome,name='welcome'),
    path("add/",views.add,name='add'),
    path("delete/<int:pk>",views.delete,name='delete'),
]