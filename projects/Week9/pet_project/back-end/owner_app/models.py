from django.db import models
from django.core import validators as v
from .validators import validate_email, validate_name, validate_age

# Create your models here.

class Owner(models.Model):

    name = models.CharField(max_length=255, blank=False, default=None, unique=False, validators=[validate_name])

    email_address = models.CharField(null=False, unique=True, validators=[validate_email])

    age = models.IntegerField(default=18, null=False, unique=False, validators=[validate_age])

    def __str__(self):
        return f"{self.name} | {self.email_address} | {self.age}"
