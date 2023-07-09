from django.contrib import admin
from django.urls import path, include
from app.views import *

urlpatterns = [
    path('', Home().index, name='home'),
    path('media/<str:type>/<str:name>', Media().getFile, name='media'),
]
