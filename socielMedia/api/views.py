from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer
from .models import UserProfile

# Create your views here.

@api_view(["GET"])
def getRoutes(request) : 
    routes = [
        "api/token/",
        "api/token/refresh/",
    ]
    return Response(routes)

@api_view(["GET"])
def getUserInfo(request, pk) :
    #print(request.user)
    #user = User.objects.get(id=request.user["id"])
    user = UserProfile.objects.get(id=pk)
    serializer =  UserSerializer(user, many=False)
    return Response(serializer.data)