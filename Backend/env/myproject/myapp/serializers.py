from .models import Todo
from rest_framework import serializers

#converts models data into json or xml format for api
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo 
        fields = '__all__'
     