from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import UserProfile, Post


class InitUserSerializer(ModelSerializer) :
    class Meta :
        model = User
        fields = ["username"]

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class UserSerializer(ModelSerializer) :
    posts = SerializerMethodField()
    user = SerializerMethodField()
    class Meta :
        model = UserProfile
        fields = ['user', 'profile_pic', 'birth_date', 'posts']

    def get_posts(self, obj):
        posts = obj.post_set.all()  
        return PostSerializer(posts, many=True).data
    def get_user(self, obj):
        user = obj.user
        return InitUserSerializer(user, many=False).data