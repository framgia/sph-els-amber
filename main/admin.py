from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models.activity import ActivityLog
from .models.answer import Answer
from .models.answer import Answer
from .models.category import Category
from .models.choice import Choice
from .models.lesson import Lesson
from .models.question import Question
from .models.relations import UserRelation
from .models.user import User

admin.site.register(ActivityLog)
admin.site.register(Answer)
admin.site.register(Category)
admin.site.register(Choice)
admin.site.register(Lesson)
admin.site.register(Question)
admin.site.register(UserRelation)
admin.site.register(User, UserAdmin)