from django.shortcuts import render
from app1.models import Student
# Create your views here.
def home(request):
    search_query = request.GET.get('search', '')
    if search_query:
        students = Student.objects.filter(name__icontains=search_query)
    else:
        students = Student.objects.all()
    return render(request,'home.html', {'students': students})