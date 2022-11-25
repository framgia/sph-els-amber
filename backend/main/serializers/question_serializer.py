from rest_framework import serializers
from ..models.question import Question

class QuestionSerializer(serializers.ModelSerializer):
    lesson_id = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    class Meta:
        model = Question
        fields = '__all__'


