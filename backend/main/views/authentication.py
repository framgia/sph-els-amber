from rest_framework import generics
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
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

class CustomObtainTokenView(ObtainAuthToken):
    def post(self, request):      
        try:
            user = User.objects.get(email=request.data['email'])
            if not user.check_password(request.data['password']):
                return Response({"error": "Incorrect password"}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_200_OK)

        data = {}
        data['username'] = request.data['email']
        data['password'] = request.data['password']

        serializer = self.serializer_class(data=data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'id': user.pk,
            'username': user.username,
            'email': user.email
        })

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        request.user.auth_token.delete()
        return Response("User logged out", status=status.HTTP_200_OK)

class ChangePasswordView(generics.UpdateAPIView):
    queryset = User.objects.filter(is_deleted=False)
    serializer_class = PasswordSerializer
    permission_classes = [IsAuthenticated]
