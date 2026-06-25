from django.urls import path 

from .views import dashboard,register,user_login,user_logout 

urlpatterns = [
    path('dashboard/',dashboard,name='dashboard'),
    path('register/',register,name='register'),
    path('login/',user_login,name='login'),
    path('logout/',user_logout,name='logout'),
]