from rest_framework import generics
from ..serializers.lesson_serializer import LessonSerializer
from ..models.lesson import Lesson


class LessonDetail(generics.RetrieveAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer