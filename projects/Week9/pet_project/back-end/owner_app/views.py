from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Owner
from .serializers import OwnerSerializer

# Create your views here.

class All_owners(APIView):
    def get(self, view):
        owners = Owner.objects.all()
        serialized_owners = OwnerSerializer(owners, many=True)
        return Response(serialized_owners.data)
