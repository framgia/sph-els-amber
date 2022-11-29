from django.urls import path
from .views.lesson import LessonList, LessonDetail
from .views.question import QuestionList, QuestionDetail
from .views.choice import ChoiceList, ChoiceDetail
from .views.answer import AnswerList, AnswerDetail

urlpatterns = [
    path('lessons/', LessonList.as_view(), name='lesson-list'),
    path('lessons/<int:lesson>/questions/', QuestionList.as_view(), name='question-list'),
    path('lessons/<int:lesson>/questions/<int:question>/choices/', ChoiceList.as_view(), name='choice-list'),

    path('lessons/<int:pk>/', LessonDetail.as_view(), name='lesson-detail'),
    path('questions/<int:pk>/', QuestionDetail.as_view(), name='question-detail'),
    path('choices/<int:pk>/', ChoiceDetail.as_view(), name='choice-detail'),
    
    path('answers/', AnswerList.as_view(), name='answer-list'),
    path('answers/<int:pk>', AnswerDetail.as_view(), name='answer-detail'),
]