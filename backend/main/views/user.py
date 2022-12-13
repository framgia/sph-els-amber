from django.utils import timezone
from rest_framework import generics
from ..serializers.user_serializer import UserSerializer
from ..models.user import User

class UserList(generics.ListAPIView):
    queryset = User.objects.filter(is_deleted=False)
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.filter(is_deleted=False)
    serializer_class = UserSerializer

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.updated_at = timezone.now()
        instance.save()
