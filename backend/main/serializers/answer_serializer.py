from rest_framework import serializers
from ..models.answer import Answer

class AnswerSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    question_id = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    lesson_id = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    choice_id = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    class Meta:
        model = Answer
        fields = '__all__'


