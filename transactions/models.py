from django.db import models

class Transaction(models.Model):
    id_transaction = models.AutoField(primary_key=True)
    num_carte_banq = models.CharField(max_length=255)
    montant = models.IntegerField()
    code_autorisation = models.CharField(max_length=255)
