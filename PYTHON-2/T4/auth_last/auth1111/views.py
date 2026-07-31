from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm 
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.decorators import login_required 

def signup_view(request) :
    if request.method =="POST" :
        form = UserCreationForm(request.POST)
        if form.is_valid() :
            user = form.save()
            login(request,user)
            return redirect("home")
    else:
        form=UserCreationForm()
    return render(request,'signup.html',{'form':form})

def login_view(request) :
    if request.user.is_authenticated : 
        return redirect("home")
    if request.method=="POST" :
        form = AuthenticationForm(request,data=request.POST)
        if form.is_valid() :
            user = form.get_user()
            login(request,user)
            return redirect("home")
    else :
        form = AuthenticationForm()
    return render(request,'signin.html',{"form":form})

def logout_view(request) :
    logout(request)
    return redirect("login")

@login_required
def home(request):
    return render(request,'home.html')