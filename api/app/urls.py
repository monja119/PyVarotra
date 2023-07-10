from django.urls import path, re_path, include  # django
from django.http import request
from rest_framework.routers import DefaultRouter  # django rest framework
from .swagger import schema_view    # swagger
from .views import *    # app

router = DefaultRouter()

router.register('produits', ProduitsViewset, basename='produits')
router.register('media', MediaViewset, basename='media')
router.register('categories', CategoriesViewset, basename='categories')

urlpatterns = [
    path('home/', HomeViewset.as_view({'post': 'home'}), name='home'),
    path('documentation/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

urlpatterns += router.urls
