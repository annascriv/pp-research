from django.urls import path
from .views import All_owners

urlpatterns = [
    path("", All_owners.as_view(), name='all_owners' )
]