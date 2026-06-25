from django.shortcuts import render,redirect
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.contrib.auth import login,logout
from django.contrib.auth.decorators import login_required

# Create your views here.
def dashboard(requests) :
    return render (requests,'dashboard.html')

def register(requests) :
    if requests.method=='POST' :
        form = UserCreationForm(requests.POST)

    if form.is_valid() :
        user = form.save()
        login(requests,user)
        return redirect('dashboard')
    else :
        form = UserCreationForm()
    return render(requests,'register.html',{'form':form})

def user_login(requests) :
    if requests.user.is_authenticated :
        return redirect('dashboard')
    if requests.method=='POST' :
        form = AuthenticationForm(requests,data=requests.POST)
        if form.is_valid():
            login(requests,form.get_user)
            return redirect('home')
    else :
            form - AuthenticationForm()
    return render(requests,'login.html',{'form':form})