from django.urls import path 
from . import views 

urlpatterns = [
    path("",views.display,name='display'),
    path("detail/<int:pk>/",views.detail,name='detail')
]