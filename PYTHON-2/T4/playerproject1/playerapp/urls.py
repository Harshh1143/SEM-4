from django.urls import path 
from . import views 

urlpatterns = [
    path("",views.base,name='home'),
    path("edit/<int:pk>/",views.edit,name='edit'),
    path("welcome/",name='welcome'),
    path("add/",views.add,name='add'),
    path("delete/",views.delete,name='delete')
]