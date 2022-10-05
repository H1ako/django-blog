from django.urls import path
from .views import *

urlpatterns = [
    path('', PostsView.as_view()),
    path('news/', PostsNewsView.as_view()),
]
