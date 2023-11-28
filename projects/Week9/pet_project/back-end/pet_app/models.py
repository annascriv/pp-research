from django.db import models
from django.core import validators as v
from .validators import validate_email, validate_name, validate_age
from owner_app.models import Owner

# Create your models here.

# class Owner(models.Model):

#     name = models.CharField(max_length=255, blank=False, default=None, unique=False, validators=[validate_name])

#     email_address = models.CharField(null=False, unique=True, validators=[validate_email])

#     age = models.IntegerField(default=18, null=False, unique=False, validators=[validate_age])

#     def __str__(self):
#         return f"{self.name} | {self.email_address} | {self.age}"



class Pet(models.Model):
    
    name = models.CharField(max_length=255, null=False, default=None)
    breed = models.CharField(max_length=255, null=False, default=None)
    age = models.IntegerField(default=1, null=False, validators=[v.MaxValueValidator(50), v.MinValueValidator(1)])
    is_vaccinated = models.BooleanField(default=False, null=False, unique=False)

    owner = models.ForeignKey(Owner, related_name='pets', on_delete=models.SET_NULL, null=True, blank=True, unique=False)

    def __str__(self):
        return f"{self.name} - {self.breed} - {self.age}"
    
    def switch_vaccination_status(self):
        self.is_vaccinated = not self.is_vaccinated
        self.save()

    def update_age(self, new_age):
        self.age=new_age
        self.save()




