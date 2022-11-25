from rest_framework import serializers
from ..models.choice import Choice

class ChoiceSerializer(serializers.ModelSerializer):
    question_id = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    class Meta:
        model = Choice
        fields = '__all__'


