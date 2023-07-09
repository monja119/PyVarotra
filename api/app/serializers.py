from django.contrib.auth.hashers import make_password, check_password

from rest_framework import serializers

from .models import *


class ProduitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produits
        fields = '__all__'


class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = '__all__'