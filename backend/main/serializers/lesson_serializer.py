from rest_framework import serializers
from ..models.lesson import Lesson

class LessonSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    user = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    class Meta:
        model = Lesson
        fields = '__all__'


