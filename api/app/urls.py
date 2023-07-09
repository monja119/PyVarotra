from django.urls import path, re_path, include
from django.http import request

from rest_framework.routers import DefaultRouter

from .views import *

router = DefaultRouter()

router.register('produits', ProduitsViewset, basename='produits')
router.register('media', MediaViewset, basename='media')


urlpatterns = [
    path('home/', HomeViewset.as_view({'post': 'home' }), name='home'),
]

urlpatterns += router.urls
