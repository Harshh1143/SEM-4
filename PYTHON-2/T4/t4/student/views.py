from django.shortcuts import get_object_or_404, render
from .models import Student
# Create your views here.
def home(requests) :
    data = Student.objects.all()
    return render(requests,'home.html',{'data':data})

def info(requests,id):
    marks = get_object_or_404(Student,id=id)
    return render(requests,'info.html',{'i':marks})