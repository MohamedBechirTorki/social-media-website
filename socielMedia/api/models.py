from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class UserProfile(models.Model) :
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField(null=True, blank=True)
    birth_date = models.DateTimeField()
    
    
    def __str__(self) :
        return self.user.username[:50]

class Post(models.Model) :
    poster = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(null=True, blank=True)
    content = models.TextField(null=True, blank=True)

    def __str__(self) :
        return "Post: " + self.id + " by " + self.poster.username[:10]

