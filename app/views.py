from django.shortcuts import render
from django.http import request, HttpResponse, FileResponse
# Create your views here.


class Home:
    def index(self, request):
        msg = 'ok, 5/5'
        return render(request, 'home/index.html', locals())


class Media:
    def getFile(self, request, type, name):

        return FileResponse(filename='../media/'+type+'/'+name, as_attachment=True)
