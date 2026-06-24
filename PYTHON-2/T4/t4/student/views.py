from django.shortcuts import get_object_or_404, render,redirect
from .models import Student
# Create your views here.
def home(requests) :
    data = Student.objects.all()
    return render(requests,'home.html',{'data':data})

def info(requests,id):
    marks = get_object_or_404(Student,id=id)
    return render(requests,'info.html',{'i':marks})

def add(requests) :
    if requests.method=='POST' :
        name = requests.POST['name']
        score = requests.POST['score']
        sub = requests.POST['sub']
        Student.objects.create(name=name,score=score,sub=sub)

        return redirect('home')
    return render(requests,'add.html')