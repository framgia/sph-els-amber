from rest_framework import serializers
from ..models.answer import Answer
from ..models.choice import Choice
from ..models.question import Question

class AnswerSerializer(serializers.ModelSerializer):
    choice_string = serializers.SerializerMethodField()
    question_word = serializers.SerializerMethodField()

    class Meta:
        model = Answer
        fields = '__all__'

    def get_choice_string(self, obj):
        method = self.context['request'].method
        if method == 'GET':
            choice = Choice.objects.get(pk=obj.choice_id)
            return choice.value

    def get_question_word(self, obj):
        method = self.context['request'].method
        if method == 'GET':
            question = Question.objects.get(pk=obj.question_id)
            return question.word
