from django.urls import path
from .views import Plant_project

urlpatterns = [
    path('', Plant_project.as_view(), name='plant_project')
]
