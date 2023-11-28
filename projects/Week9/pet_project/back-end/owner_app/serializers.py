from rest_framework import serializers
from .models import Owner
from pet_app.models import Pet
from pet_app.serializers import PetSerializer


class OwnerSerializer(serializers.ModelSerializer):

    pets = PetSerializer(many=True)

    class Meta:
        model = Owner
        fields = ["name", "email_address", "age", "pets"]