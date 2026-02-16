from django.db import models
from userApp.models import User

class productModel(models.Model):

    farmer_id= models.ForeignKey(User,on_delete=models.CASCADE)

    product_img = models.CharField(max_length=80)
    name = models.CharField(max_length =100)
    category = models.CharField (max_length = 255)
    price_per_unit = models.IntegerField()
    avilable_quantity = models.IntegerField()
    unit_type = models.CharField(max_length=20)

    QUALITY_CHOICES = [
        ('A', 'Grade A'),
        ('B', 'Grade B'),
        ('Organic', 'Organic'),
        ('Premium', 'Premium'),
    ]
    quality_grade = models.CharField(
        max_length=20,
        choices=QUALITY_CHOICES
    )
    Harvest_date = models.DateField()
    decription = models.CharField(max_length=150)

    ORGANIC_CHOICES = [
        ('Organic', 'Organic'),
        ('Non-Organic', 'Non-Organic'),
    ]

    org_norg = models.CharField(max_length=20,choices = ORGANIC_CHOICES)
    location = models.CharField(max_length=100)
    delivery_option = models.CharField(max_length=50)

    def __str__(self):
        return self.name