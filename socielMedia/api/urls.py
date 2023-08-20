from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["username"] = user.username

        return token
class MyTokenObtainPairView(TokenObtainPairView) :
    serializer_class = MyTokenObtainPairSerializer

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("get-user-info/<str:username>/", views.getUserInfo, name="user-info"),
    path("get-posts/", views.getPosts, name="get-posts"),
    path("create-post/", views.createPost, name="create-post"),
    path("add-comment/", views.addComment, name="add-comment"),
]




