from django.urls import path 
from . import views 

urlpatterns = [
    path("",views.signup_view,name='signup'),
    path("login/",views.login_view,name='login'),
    path("logout/",views.logout_view,name='logout'),
    path("home/",views.home,name='home'),
    path("confirm_logout/", views.confirm_logout, name="confirm_logout"),
]