from django.shortcuts import render
from .models import Book
# Create your views here.
def list_book(request) :
    book = Book.objects.all()
    
    return render(request,'book_list.html',{'book':book})