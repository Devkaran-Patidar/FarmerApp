from django.urls import path
from . import views

urlpatterns = [
    
    path("addproduct/", views.add_product),
    
]
