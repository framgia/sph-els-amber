from rest_framework import generics
from ..serializers.choice_serializer import ChoiceSerializer
from ..models.choice import Choice

class ChoiceList(generics.ListAPIView):
    serializer_class = ChoiceSerializer

    def get_queryset(self):
        question = self.kwargs['question']
        return Choice.objects.filter(question_id=question)

class ChoiceDetail(generics.RetrieveAPIView):
    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer