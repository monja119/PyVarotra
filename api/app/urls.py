from django.urls import path, re_path, include
from django.http import request

from rest_framework.routers import DefaultRouter

from app.views import *

router = DefaultRouter()

urlpatterns = [
    path('home/', HomeViewset.as_view({'post': 'home' }), name='home'),
]

urlpatterns += router.urls
