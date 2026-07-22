from django.shortcuts import render,redirect 
from django.contrib.auth.form import UserCreationForm,AuthenticationForm
from django.contrib.auth import login, logout 
from django.contrib.auth.decorators import login_required 

def signup_view(request) :
    if request.method == "POST" :
        form = UserCreationForm(request.POST)
        if form.is_valid() :
            user = form.save()
            login(request,user)
            return redirect('dashboard')
        else :
            form = UserCreationForm()
        return render(request,'signup.html',{'form':form})

def login_view(request):
    if request.user.is_Authenticated() :
        return redirect("dashboard")
    if request.method == "POST" :
        form = AuthenticationForm(request,data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request,user)
            return redirect('dashboard')
        else :
            form = AuthenticationForm()
        return render(request,'login.html',{'form',form})

@login_required
def dashboard(request):
    return render(request,'dashboard.html')

def logout(request):
    logout(request)
    return redirect("login")