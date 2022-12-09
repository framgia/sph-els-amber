from rest_framework import serializers
from ..models.lesson import Lesson
from ..models.category import Category

class LessonSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()

    class Meta:
        model = Lesson
        fields = '__all__'

    def get_category(self, obj):
        category = Category.objects.get(pk=obj.category_id)
        return category.title
