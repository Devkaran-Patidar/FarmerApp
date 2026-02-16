from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import contactModel

class contactSerializer(serializers.ModelSerializer):
    class Meta:
        model =contactModel
        fields ='__all__'

# class UserSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True)
#     class Meta:
#         model = User
#         fields = ['id', 'username', 'email', 'phone_number', 'avtar', 'password', 'role']

#     def create(self, validated_data):
#         user = User.objects.create_user(
#              email=validated_data['email'],
#              username=validated_data.get('username', ''),
#              phone_number=validated_data.get('phone_number', ''),
#              avtar=validated_data.get('avtar', ''),
#              role=validated_data['role'],
#              password=validated_data['password']
#         )
#         return user

