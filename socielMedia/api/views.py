from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer, PostSerializer
from .models import UserProfile, Post, Comment

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

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getPosts(request) :
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createPost(request) :
    data = request.data
    user = UserProfile.objects.get(user__id = request.user.id)
    post = Post(poster= user,content=data["content"], image=data["image"])
    post.save()
    return Response("New post was created")
   
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def addComment(request) :
    try :
        user = UserProfile.objects.get(user__username=request.user)
        data = request.data
        post = Post.objects.get(id=data["post"])
        Comment.objects.create(user=user, post=post, content=data["content"])
        return Response("Adding comment successfully")
    except :
        return Response("Adding comment error")

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def addLike(request) :
    post = Post.objects.get(id=request.data["post"])
    user = UserProfile.objects.get(user__username=request.user)    
    post.likes.add(user)
    post.unlikes.remove(user)
    post.save()
    return Response(PostSerializer(post, many=False).data)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def addUnlike(request) :
    post = Post.objects.get(id=request.data["post"])
    user = UserProfile.objects.get(user__username=request.user)    
    post.unlikes.add(user)
    post.likes.remove(user)
    post.save()
    return Response(PostSerializer(post, many=False).data)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def removeReact(request) :
    post = Post.objects.get(id=request.data["post"])
    user = UserProfile.objects.get(user__username=request.user)    
    post.unlikes.remove(user)
    post.likes.remove(user)
    post.save()
    return Response(PostSerializer(post, many=False).data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def peoplesYouMayKnow(request) :
    users = UserProfile.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)