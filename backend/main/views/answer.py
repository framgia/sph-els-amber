from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..serializers.answer_serializer import AnswerSerializer
from ..models.answer import Answer

class AnswerList(APIView):
    def get(self, request):
        get_data = request.query_params
        answers = Answer.objects.filter(lesson=get_data['lesson'], user=get_data['user'])
        serializer = AnswerSerializer(answers, context={'request': request}, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = AnswerSerializer(data=request.data, context={'request': request})

        serializer.is_valid(raise_exception=True)
        serializer.save(serializer.validated_data)

        return Response('Answer added', status=status.HTTP_201_CREATED)
           
  
class AnswerDetail(generics.RetrieveAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
