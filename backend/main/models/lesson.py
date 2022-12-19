from django.db import models
from .category import Category

class Lesson(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="lesson", default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return self.id
