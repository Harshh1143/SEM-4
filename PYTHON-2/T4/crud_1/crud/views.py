from django.shortcuts import render,redirect,get_object_or_404
from .models import Student 
# Create your views here.

def home(request) :
    students = Student.objects.all()
    q = request.GET.get("q")

    if q : 
        students = Student.objects.filter(name__icontains=q)
    return render(request,"home.html",{"students":students})

def edit(request,pk) :
    students = get_object_or_404(Student,pk=pk)
    if request.method == "POST" :
        students.name = request.POST['name']
        students.div = request.POST['div']
        students.school = request.POST['school']
        students.rank = request.POST['rank']
        students.marks = request.POST['marks']
        students.save()
        return redirect("home")
    return render(request,'edit.html',{"students":students})

def detail(request,pk) :
    students = get_object_or_404(Student,pk=pk)
    return render(request,"detail.html",{"i":students})

def create(request) :
    if request.method == "POST" :
        Student.objects.create(
            name = request.POST['name'],
            div = request.POST['div'],
            school = request.POST['school'],
            rank = request.POST['rank'],
            marks = request.POST['marks']
        )
        return redirect("home")
    return render(request,"create.html")

def delete(request,pk) :
    students = get_object_or_404(Student,pk=pk)
    students.delete()
    return redirect("home")