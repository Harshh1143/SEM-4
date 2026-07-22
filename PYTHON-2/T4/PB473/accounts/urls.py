from django.urls import path 
from . import views 
urlpatterns = [
    path("",views.signup,name='signup'),
    path("homepage/",views.dashboard,name='homepage'),
    path("login/",views.signin,name='login'),
    path("logout/",views.logout1,name='logout')
]