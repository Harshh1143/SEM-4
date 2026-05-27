from django.shortcuts import render

# Create your views here.
def contact(request):
    return render(request,'contact.html') 
def hello(request):
    name = 'harsh'
    number = 8
    return render(request,'base.html',{'n':name,'num':number})