from rest_framework import serializers
from ..models.relations import UserRelation

class UserRelationSerializer(serializers.ModelSerializer):
    follower_id = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    following_id = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    class Meta:
        model = UserRelation
        fields = '__all__'


