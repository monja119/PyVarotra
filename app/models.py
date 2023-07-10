from django.db import models

class Client(models.Model):
    id_cli = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    numero = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
    
class Article(models.Model):
    id_article = models.AutoField(primary_key=True)
    nom_article = models.CharField(max_length=255)
    section_article = models.CharField(max_length=255)
    prix = models.CharField(max_length=255)

    def __str__(self):
        return "Article {self.id_article}"

class Commentaire(models.Model):
    id_commentaire = models.AutoField(primary_key=True)
    id_article = models.ForeignKey(Article, on_delete=models.CASCADE)
    contenu = models.CharField(max_length=255)

    def __str__(self):
        return "Commentaire {self.id_commentaire}"

class Panier(models.Model):
    id_panier = models.AutoField(primary_key=True)
    id_article = models.ForeignKey(Article, on_delete=models.CASCADE)
    
    def __str__(self):
        return "Panier {self.id_panier}"

class Transaction(models.Model):
    id_transaction = models.AutoField(primary_key=True)
    panier = models.ForeignKey(Panier, on_delete=models.CASCADE)
    montant = models.IntegerField()
    code_autorisation = models.CharField(max_length=255)

    def __str__(self):
        return "Transcation {self.id_transaction}"