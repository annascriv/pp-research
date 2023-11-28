from rest_framework import serializers
from .models import Pet, Owner


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ["name", "breed", "age", "is_vaccinated", "owner"]


class OwnerSerializer(serializers.ModelSerializer):

    pets = PetSerializer(many=True)

    class Meta:
        model = Owner
        fields = ["name", "email_address", "age", "pets"]