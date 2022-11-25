from django.db import models
from .user import User
from .relations import UserRelation
from .lesson import Lesson

class ActivityLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user", default=None)
    user_relations = models.ForeignKey(UserRelation, on_delete=models.CASCADE, related_name="user_relation", null=True)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name="lesson", null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return self.id