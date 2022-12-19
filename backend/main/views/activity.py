import datetime
from rest_framework import generics
from ..serializers.activity_serializer import ActivitySerializer
from ..models.activity import ActivityLog

class ActivityList(generics.ListCreateAPIView):
    serializer_class = ActivitySerializer

    def get_queryset(self):
        queryset = ActivityLog.objects.filter(is_deleted=False)
        user = self.request.query_params.get('user')
        if user:
            queryset = queryset.filter(user=user)
        return queryset

class ActivityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ActivityLog.objects.filter(is_deleted=False)
    serializer_class = ActivitySerializer

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.updated_at = datetime.datetime.now()
        instance.save()
