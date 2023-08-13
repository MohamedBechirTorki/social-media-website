from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
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
def getUserInfo(request, username) :
    user = UserProfile.objects.get(user__username=username)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)