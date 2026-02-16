from django.db import models

# Create your models here.

class contactModel(models.Model):
    name = models.CharField(max_length =10)
    email = models.EmailField(max_length = 20)
    subject = models.CharField (max_length = 50)
    message = models.CharField (max_length = 255)

    def __str__(self):
        return self.name