from django.contrib import admin
from .models import Client

# controller les champs à afficher en les spécifiant avec list_display
class ClientAdmin(admin.ModelAdmin):
    list_display = ("firstname", "lastname")

# rendre le modèle de Client visible dans l'administrateur page
admin.site.register(Client, ClientAdmin)
