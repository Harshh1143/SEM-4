from django.urls import path 
from . import views 
urlpatterns = [
    path("",views.movie,name='display'),
    path("detail/<int:pk>/",views.detail,name='detail'),
    path("create/",views.create,name='create'),
    path("edit/<int:pk>/",views.edit,name='edit')
]