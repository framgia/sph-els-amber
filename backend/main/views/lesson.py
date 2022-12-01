from rest_framework import generics
from ..serializers.lesson_serializer import LessonSerializer
from ..models.lesson import Lesson

class LessonList(generics.ListAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    filterset_fields = ['category_id']
    
class LessonDetail(generics.RetrieveAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

