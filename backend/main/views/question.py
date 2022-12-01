from rest_framework import generics
from ..serializers.question_serializer import QuestionSerializer
from ..models.question import Question

class QuestionList(generics.ListAPIView):
    serializer_class = QuestionSerializer
    
    def get_queryset(self):
        lesson = self.kwargs['lesson']
        return Question.objects.filter(lesson_id=lesson)

class QuestionDetail(generics.RetrieveAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
