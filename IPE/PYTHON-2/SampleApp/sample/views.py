from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'sample/home.html')

def about(request) :
    return render(request,'sample/about.html')

def contact(request) : 
    return render(request,'sample/contact.html')
