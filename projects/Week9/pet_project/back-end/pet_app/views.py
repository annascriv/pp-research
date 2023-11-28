from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Pet, Owner
from .serializers import PetSerializer, OwnerSerializer

# Create your views here.

class All_pets(APIView):
    def get(self, request):
        pets = Pet.objects.all()
        serialized_pets = PetSerializer(pets, many=True)
        return Response(serialized_pets.data)
    

