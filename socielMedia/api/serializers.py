from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import UserProfile, Post, Comment


class InitUserSerializer(ModelSerializer) :
    class Meta :
        model = User
        fields = ["username"]



class UserSerializer(ModelSerializer) :
    #posts = SerializerMethodField()
    user = SerializerMethodField()
    class Meta :
        model = UserProfile
        fields = ['user', 'profile_pic', 'birth_date']

    def get_user(self, obj):
        user = obj.user
        return InitUserSerializer(user, many=False).data

class CommentSerializer(ModelSerializer) :
    user = SerializerMethodField()
    class Meta :
        model = Comment
        fields = "__all__"
    def get_user(self, obj) :
        user = UserProfile.objects.get(user__username =  obj.user)
        return UserSerializer(user).data 

class PostSerializer(ModelSerializer):
    poster = SerializerMethodField()
    comments = SerializerMethodField()
    class Meta:
        model = Post
        fields = ['id','poster', 'content', 'image', 'comments', 'likes', 'unlikes']
    def get_poster(self, obj) :
        userP = UserProfile.objects.get(user__username =  obj.poster)
        return UserSerializer(userP).data 
    def get_comments(self, obj) :
        comments = Comment.objects.filter(post=obj)
        return CommentSerializer(comments, many=True).data
