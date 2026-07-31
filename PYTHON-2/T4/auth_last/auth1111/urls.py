from django.urls import path 
from . import views 

urlpatterns =[
    path("",views.signup_view,name='signin'),
    path("home/",views.home,name='home'),
    path("login/",views.login_view,name='login'),
    path("logout/",views.logout_view,name='logout')
]