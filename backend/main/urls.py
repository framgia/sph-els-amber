from django.urls import path
from .views.authentication import RegisterView, ChangePasswordView
from .views.user import UserList, UserDetail
from .views.category import CategoryList, CategoryDetail
from .views.lesson import LessonList, LessonDetail
from .views.question import QuestionList, QuestionDetail
from .views.choice import ChoiceList, ChoiceDetail
from .views.answer import AnswerList, AnswerDetail
from .views.activity import ActivityList, ActivityDetail

urlpatterns = [
    path('register/', RegisterView.as_view(), name="register"),
    path('change-password/', ChangePasswordView.as_view(), name="change-password"),

    path('users/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),

    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),

    path('lessons/', LessonList.as_view(), name='lesson-list'),
    path('lessons/<int:lesson>/questions/', QuestionList.as_view(), name='question-list'),
    path('lessons/<int:lesson>/questions/<int:question>/choices/', ChoiceList.as_view(), name='choice-list'),

    path('lessons/<int:pk>/', LessonDetail.as_view(), name='lesson-detail'),
    path('questions/<int:pk>/', QuestionDetail.as_view(), name='question-detail'),
    path('choices/<int:pk>/', ChoiceDetail.as_view(), name='choice-detail'),

    path('answers/', AnswerList.as_view(), name='answer-list'),
    path('answers/<int:pk>/', AnswerDetail.as_view(), name='answer-detail'),

    path('activity/', ActivityList.as_view(), name='activity-list'),
    path('activity/<int:pk>/', ActivityDetail.as_view(), name='activity-detail'),
]
