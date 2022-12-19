from rest_framework import serializers
from ..models.activity import ActivityLog
from ..models.user import User
from ..models.category import Category
from ..models.lesson import Lesson
from ..models.question import Question
from ..models.answer import Answer

class ActivitySerializer(serializers.ModelSerializer):
    user_relations = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    user_name = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()
    result = serializers.SerializerMethodField()
    question_count = serializers.SerializerMethodField()

    class Meta:
        model = ActivityLog
        fields = '__all__'

    def get_user_name(self, obj):
        method = self.context['request'].method
        if method == 'GET':
            user = User.objects.get(id=obj.user_id)
            return user.username

    def get_category(self, obj):
        method = self.context['request'].method
        if method == 'GET' and obj.lesson_id:
            lesson = Lesson.objects.get(id=obj.lesson_id)
            category = Category.objects.get(id=lesson.category_id)
            return category.title

    def get_result(self, obj):
        method = self.context['request'].method
        if method == 'GET' and obj.lesson_id:
            answers = Answer.objects.filter(lesson=obj.lesson_id, user=obj.user_id, is_correct=True)
            return answers.count()

    def get_question_count(self, obj):
        method = self.context['request'].method
        if method == 'GET' and obj.lesson_id:
            questions = Question.objects.filter(lesson=obj.lesson_id)
            return questions.count()
