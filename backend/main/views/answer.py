from rest_framework import generics
from ..serializers.answer_serializer import AnswerSerializer
from ..models.answer import Answer

class AnswerList(generics.ListAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    filterset_fields = ['user_id', 'lesson_id']

class AnswerDetail(generics.RetrieveAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
