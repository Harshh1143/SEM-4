from urllib import request

from django.shortcuts import render
from django.http import HttpResponse
import pandas as pd 
import numpy as np 
from bs4 import BeautifulSoup

# Create your views here.
def dataframe(request):

    with open('demo.html','r',encoding='utf-8') as f :
        res = f.read()
    soup = BeautifulSoup(res,'html.parser')
    df = {'Name':[],
      'Ram':[],
      'Rom':[],
      'Color':[],
      'star':[],
    'review':[],
      'Rear_Camera':[],
      'Front_Camera':[],
      'old_price':[],
      'new_price':[],
       'discount':[],
       'rating':[],
        'Display(cm)':[],
      'Display(inch)':[],
   }
    for i in (soup.find_all('div',class_='yKfJKb row')):
        df['Name'].append((i.find('div',class_='KzDlHZ').text).split('(')[0])
        df['Color'].append(((i.find('div',class_='KzDlHZ').text.strip()).split('(')[1]).split(',')[0])
        df['Ram'].append(((i.find('li',class_='J+igdf').text.strip()).split('|')[0]))
        df['Rom'].append(((i.find('li',class_='J+igdf').text.strip()).split('|')[1]).split('ROM')[0])
        df['Display(cm)'].append(float(((i.find('li',class_='J+igdf').text.strip()).split('|')[1]).split('ROM')[1].split('cm')[0]))
        df['Display(inch)'].append(float(((i.find('li',class_='J+igdf').text.strip()).split('|')[1]).split('ROM')[1].split('cm')[1].split('inch')[0].split('(')[1]))
        df['star'].append(float((i.find('div',class_='XQDdHH').text.strip())))
        df['rating'].append((i.find('span',class_='Wphh3N').text.strip()).split('Ratings')[0])
        df['review'].append(((i.find('span',class_='Wphh3N').text.strip()).split('&')[1]).split('Reviews')[0])
        df['Rear_Camera'].append(((i.find('li',class_='J+igdf').text.strip()).split('Display')[1].split('|')[0]))
        df['Front_Camera'].append(((i.find('li',class_='J+igdf').text.strip()).split('Display')[1].split('|')[1]).split('Front')[0])
        
        df['new_price'].append(int(((i.find('div',class_='Nx9bqj _4b5DiR').text.strip()).split('₹')[1].replace(',',''))))
        try:
            df['old_price'].append(int(((i.find('div',class_='yRaY8j ZYYwLA').text.strip()).split('₹')[1].replace(',',''))))
        except Exception:
            df['old_price'].append("Nan")
        try :
            df['discount'].append((i.find('div',class_='UkUFwK').text.strip()).split('off')[0])
        except Exception:
            df['discount'].append('Nan')
    df1 = pd.DataFrame(df)
    return render(request,'home.html', {'dataframe': df1})