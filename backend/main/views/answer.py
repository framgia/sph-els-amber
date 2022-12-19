from rest_framework import generics
from ..serializers.answer_serializer import AnswerSerializer
from ..models.answer import Answer
from ..models.choice import Choice
from ..models.question import Question

class AnswerList(generics.ListCreateAPIView):
    serializer_class = AnswerSerializer

    def get_queryset(self):
        queryset = Answer.objects.filter(is_deleted=False)
        lesson = self.request.query_params.get('lesson')
        user = self.request.query_params.get('user')

        if user and lesson :
            queryset = queryset.filter(user=user, lesson=lesson)
        elif user:
            queryset = queryset.filter(user=user)
        return queryset

    def perform_create(self, serializer):
        choice = Choice.objects.get(pk=serializer.data['choice'])
        question = Question.objects.get(pk=serializer.data['question'])
        is_correct = True if question.correct_answer == choice.value else False

        answer = Answer.objects.create(
            user=serializer.validated_data['user'],
            question=serializer.validated_data['question'],
            lesson=serializer.validated_data['lesson'],
            choice=serializer.validated_data['choice'],
            is_correct=is_correct
        )
        
        data = answer.save()
        return data           
  
class AnswerDetail(generics.RetrieveAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
