from django.urls import path
from .import views

urlpatterns = [
    path("todos/" , views.todo_list, name="index"),
    path("todos/<int:pk>/delete/", views.todo_delete)
]
