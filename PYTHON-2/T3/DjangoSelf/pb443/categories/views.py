from django.shortcuts import render
from .models import Categories
# Create your views here.
def categories(requests) :
    category =Categories.objects.all()

    return render(requests,'category.html',{'category':category})