from django.db import models

# Create your models here.
class WorkShop(models.Model):
    name = models.CharField(max_length = 50)
    description = models.TextField()
    address = models.CharField(max_length = 50)