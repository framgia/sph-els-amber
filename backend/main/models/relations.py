from django.db import models
from .user import User

class UserRelation(models.Model):
    follower = models.ForeignKey(User, on_delete=models.CASCADE, related_name="followers", default=None)
    following = models.ForeignKey(User, on_delete=models.CASCADE, related_name="following", default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return self.id