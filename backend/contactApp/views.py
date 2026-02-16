from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import contactModel
from .serializer import contactSerializer


@api_view(['POST'])
def store_contact(req):
    newContact = req.data
    myserializer = contactSerializer(data = newContact)

    if myserializer.is_valid():
        myserializer.save()
        return Response(myserializer.data)
    
    return Response(myserializer.errors)
