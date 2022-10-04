from django.urls import path, include
from .views import *

urlpatterns = [
    path('', PostsView.as_view()),
    path('', PostsNewsView.as_view()),
]
