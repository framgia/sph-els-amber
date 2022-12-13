from rest_framework import generics
from ..serializers.user_serializer import UserSerializer
from ..serializers.password_serializer import PasswordSerializer
from ..models.user import User

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.filter(is_deleted=False)
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        user = User.objects.create(
            username=serializer.validated_data['username'],
            email=serializer.validated_data['email']
        )
        user.set_password(serializer.validated_data['password'])
        user.save()

class ChangePasswordView(generics.UpdateAPIView):
    pass
