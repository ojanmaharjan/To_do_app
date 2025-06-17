from .models import Todo
from rest_framework import serializers

#converts models data into json or xml format for api
class TodoSeralizers(serializers.ModelSerializer):
    class meta:
        model = Todo 
        fields = '__all__'
     