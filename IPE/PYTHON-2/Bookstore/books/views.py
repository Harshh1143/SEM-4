from django.shortcuts import render,get_object_or_404,redirect 
from .models import Book 
# Create your views here.

def display(request):
    books = Book.objects.all()
    q = request.GET.get("q")
    if q :
        books = Book.objects.filter(title__icontains=q)
    return render(request,'display.html',{'books':books})

def detail(request,pk) :
    books = get_object_or_404(Book,pk=pk)
    return render(request,'detail.html',{'b':books})

