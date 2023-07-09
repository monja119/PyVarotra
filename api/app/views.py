from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import action


class HomeViewset(viewsets.ViewSet):

    def home(self, request):
        return HttpResponse('ok')
