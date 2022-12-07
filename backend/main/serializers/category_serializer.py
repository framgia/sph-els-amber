from rest_framework import serializers
from ..models.category import Category
from ..models.lesson import Lesson

class CategorySerializer(serializers.ModelSerializer):
    lesson_id = serializers.SerializerMethodField('get_lesson_id')

    class Meta:
        model = Category
        fields = '__all__'

    def get_lesson_id(self, obj):
        lesson = Lesson.objects.get(category_id=obj.id)
        return lesson.id
