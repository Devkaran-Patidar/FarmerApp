from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True) 
    ROLE_CHOICES = (
        ('farmer', 'Farmer'),
        ('buyer', 'Buyer'),
    )

    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    # full_name = models.CharField(max_length=255, blank=True)
    # email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20, blank=True)
    avtar = models.CharField(max_length=255, blank=True)
    # password = models.CharField(max_length=128)
    def __str__(self):
        return self.username

