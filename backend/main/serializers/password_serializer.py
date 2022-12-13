from rest_framework import serializers
from ..models.user import User

class PasswordSerializer(serializers.ModelSerializer):
    new_password = serializers.CharField(write_only=True, required=True)
    confirm_password = serializers.CharField(write_only=True, required=True)
    current_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['new_password', 'current_password', 'confirm_password']

    def validate(self, obj):
        if obj['new_password'] != obj['confirm_password']:
            raise serializers.ValidationError("Passwords do not match")
        
        return obj

    def validate_current_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError("Current password is incorrect")

    def update(self, instance, validated_data):
        instance.set_password(validated_data['new_password'])
        instance.save()

        return instance
