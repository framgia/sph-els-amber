from django.db import models
from .user import User
from .question import Question
from .lesson import Lesson
from .choice import Choice

class Answer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="answer", default=None)
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name="answer", default=None)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name="answer", default=None)
    choice = models.ForeignKey(Choice, on_delete=models.CASCADE, related_name="answer", default=None)
    is_correct = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return self.id