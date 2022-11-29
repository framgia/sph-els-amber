from django.urls import path
from .views.lesson import LessonDetail

urlpatterns = [
    path('lessons/<int:pk>/', LessonDetail.as_view(), name='lesson-detail')
]