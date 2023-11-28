from django.urls import path
from .views import All_pets

urlpatterns = [
    path("", All_pets.as_view(), name="all_pets"),
    
]