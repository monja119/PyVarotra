from django.contrib.auth.hashers import make_password, check_password

from rest_framework import serializers

from .models import *


class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = '__all__'


class ProduitsSerializer(serializers.ModelSerializer):
    media = MediaSerializer(required=False, read_only=True)

    class Meta:
        model = Produits
        fields = '__all__'


class CategoriesSerializer(serializers.ModelSerializer):
    produits = ProduitsSerializer(required=False, many=True, read_only=True)

    class Meta:
        model = Categories
        fields = '__all__'