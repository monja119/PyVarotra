from django.db import models

class Client(models.Model):
    id_cli = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    numero = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

    #  st utile pour afficher des informations significatives sur les instances de votre modèle lors du débogage
    # def __str__(self):
    #     return self.email

