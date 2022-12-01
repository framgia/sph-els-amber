from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..serializers.answer_serializer import AnswerSerializer
from ..models.answer import Answer

class AnswerList(APIView):
    def get(self, request):
        answers = Answer.objects.all()
        serializer = AnswerSerializer(answers, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = AnswerSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()

            response = Response('Answer added', status=status.HTTP_201_CREATED)
        else:
            response =  Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return response
           
  
class AnswerDetail(generics.RetrieveAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
