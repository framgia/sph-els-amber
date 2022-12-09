from rest_framework import serializers
from ..models.activity import ActivityLog
from ..models.user import User
from ..models.category import Category
from ..models.lesson import Lesson

class ActivitySerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    user_relations = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    lesson_id = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    user_name = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()

    class Meta:
        model = ActivityLog
        fields = '__all__'

    def get_user_name(self, obj):
        method = self.context['request'].method
        if method == 'GET':
            user = User.objects.get(id=obj.user_id)
            return user.name

    def get_category(self, obj):
        method = self.context['request'].method
        if method == 'GET':
            lesson = Lesson.objects.get(id=obj.lesson_id)
            category = Category.objects.get(id=lesson.category_id)
            return category.title
