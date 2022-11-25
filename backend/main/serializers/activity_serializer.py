from rest_framework import serializers
from ..models.activity import ActivityLog

class ActivitySerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    user_relation = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    lesson_id = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    class Meta:
        model = ActivityLog
        fields = '__all__'