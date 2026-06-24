from django.shortcuts import render
from .models import Student
# Create your views here.
def home(requests) :
    data = Student.objects.all()
    return render(requests,'home.html',{'data':data})