from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import productModel
from .serializer import productSerializer

@api_view(['POST'])
def add_product(req):
    newproduct = req.data
    myserializer = productSerializer(data = newproduct)

    if myserializer.is_valid():
        myserializer.save()
        return Response(myserializer.data)
    
    return Response(myserializer.errors)



