from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from requests_oauthlib import OAuth1
from pp_research.settings import env
import pprint

# Create your views here.

class Plant_project(APIView):

    def get(self, request):

        pp = pprint.PrettyPrinter(indent=2, depth=3)

        KEY = env.get("PLANT_API_KEY")

        endpoint = f"https://perenual.com/api/species-list?key={KEY}"

        response = requests.get(endpoint)

        responseJSON = response.json()
        pp.pprint(responseJSON)
        return Response(responseJSON)



