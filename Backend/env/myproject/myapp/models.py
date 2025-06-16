from django.db import models
from django.utils import timezone

# Create your models here.
class Todo(models.Model):
    title =models.CharField( max_length=50)
    date = models.DateTimeField( default = timezone.now)

    def __str__(self):
        return self.title
    
