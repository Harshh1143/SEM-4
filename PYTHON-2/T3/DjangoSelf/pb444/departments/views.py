from django.shortcuts import render 
from .models import Departments

def departments(requests) :
    department = Departments.objects.all()

    return render (requests,'departments.html',{'departments':department})