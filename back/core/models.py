from django.db import models

class Custos(models.Model):
    id = models.AutoField(primary_key=True)
    descricao = models.CharField(max_length=1000)
    valor = models.IntegerField()
    inicio = models.DateField()
    fim = models.DateField()
    credito = models.BooleanField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'custos'
