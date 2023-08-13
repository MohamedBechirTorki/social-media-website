from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import UserProfile, Post


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
    
class PostSerializer(ModelSerializer):
    poster = SerializerMethodField()
    class Meta:
        model = Post
        fields = ['poster', 'content', 'image', 'comments', 'likes', 'unlikes']
    def get_poster(self, obj) :
        userP = UserProfile.objects.get(user__username =  obj.poster)
        return UserSerializer(userP).data 