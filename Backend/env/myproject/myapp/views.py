from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Todo
from django.http import HttpResponse
from .serializers import TodoSeralizers


@api_view(['GET','POST'])


def todo_list(request):
   if request.method  =="POST":
      serializer = TodoSeralizers(data= request.data)
      if serializer.is_valid():
         serializer.save()
         return Response(serializer.data)
      return Response(serializer.error)
     
   
   elif request.method == "GET":
      todos = Todo.objects.all().order_by('-date')
      serializer = TodoSeralizers(todos, many= True) #changing many todos into json format
      return  Response  (serializer.data)
   
@api_view(['DELETE'])
def todo_delete(request,pk):
   try:
        todo = Todo.objects.get(pk=pk)
        todo.delete()
        return Response({'message':"Deletec"})
   except Todo.DoesNotExist:
      return Response({"error":"Not found"},status=404)

