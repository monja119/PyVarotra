from django.db import models
from articles.models import Article

class Commentaire(models.Model):
    id_commentaire = models.AutoField(primary_key=True)
    id_article = models.ForeignKey(Article, on_delete=models.CASCADE)
    contenu = models.CharField(max_length=255)

