from django.db import models

class Article(models.Model):
    id_article = models.AutoField(primary_key=True)
    nom_article = models.CharField(max_length=255)
    section_article = models.CharField(max_length=255)
    prix = models.CharField(max_length=255)
