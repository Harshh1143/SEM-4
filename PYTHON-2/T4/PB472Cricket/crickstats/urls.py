from django.urls import path 
from . import views 

urlpatterns = [
    path("",views.homepage,name='homepage'),
    path("add/",views.add_player,name='add'),
    path('detail/<int:pk>/',views.player_detail,name='detail'),
    path('edit/<int:pk>/',views.edit_player,name='edit'),
    path('delete/<int:pk>/',views.delete,name='delete')
]