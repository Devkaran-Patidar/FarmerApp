from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from userApp.serializer import UserSerializer
from userApp.models import User
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password

@api_view(['POST'])
def register_view(request):
    newuser =request.data
    myserializer = UserSerializer(data=newuser)

    if myserializer.is_valid():
        myserializer.save()
        return Response(myserializer.data)
    return Response(myserializer.errors)



@api_view(['POST'])
def login_view(request):
    email = request.data.get("email",None)
    password = request.data.get("password",None)


    if email is None or password is None:
        return Response({"error": "Email and password are required"}, status=400)

    # user = authenticate(email=user.email, password=password)
   
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({"error": "Invalid credentials"})


    if not check_password(password, user.password):
        return Response({"error": "Invalid credentials"})
    
    return Response({
            "message": "Login successful",
                "username": user.username,
                "email": user.email,
                "role": user.role,
                "id": user.id
            
        })

@api_view(['GET'])
def profile_view(request,user_id):
    try:
        user = User.objects.get(id=user_id)
        serializers = UserSerializer(user)
        return Response(serializers.data)
    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=404)