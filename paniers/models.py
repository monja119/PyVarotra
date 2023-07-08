from django.db import models
from articles.models import Article

class Panier(models.Model):
    id_panier = models.AutoField(primary_key=True)
    id_article = models.ForeignKey(Article, on_delete=models.CASCADE)
    
    # def __str__(self):
    #     return f"Panier {self.id_panier}"
