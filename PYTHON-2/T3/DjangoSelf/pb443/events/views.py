from django.shortcuts import render
from .models import Events
# Create your views here.
def upcoming(requests) :
    search = requests.GET.get('q')

    if search : 
        events = Events.objects.filter(event__icontains=search)

    else :
        events = Events.objects.all().order_by('date')
    
    return render(requests,'events.html',{'event':events})

