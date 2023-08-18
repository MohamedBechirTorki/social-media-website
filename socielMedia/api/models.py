from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.

class UserProfile(models.Model) :
    pic_url = "https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg"
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField(default=pic_url)
    birth_date = models.DateField(null=True)
    
    def __str__(self) :
        return self.user.username[:50]

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
post_save.connect(create_user_profile, sender=User)

class Post(models.Model) :
    poster = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    content = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    likes = models.ManyToManyField(UserProfile, related_name='liked_post', blank=True)
    unlikes = models.ManyToManyField(UserProfile, related_name='unliked_post', blank=True)

    def __str__(self) :
        return f"Post: {self.id} user: {self.poster.user.username[:10]}"

class Comment(models.Model) :
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.TextField()
    def __str__(self) :
        return f"Comment: {self.id} user: {self.user.user.username[:10]} post: {self.post.id}"