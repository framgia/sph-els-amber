from rest_framework import serializers
from ..models.answer import Answer
from ..models.choice import Choice
from ..models.question import Question

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__'

    def create(self, validated_data):
        choice = Choice.objects.get(pk=self.data['choice'])
        question = Question.objects.get(pk=self.data['question'])
        is_correct = True if question.correct_answer == choice.value else False

        answer = Answer(
            user=validated_data['user'],
            question=validated_data['question'],
            lesson=validated_data['lesson'],
            choice=validated_data['choice'],
            is_correct=is_correct,
        )
        
        answer.save()
        return answer
