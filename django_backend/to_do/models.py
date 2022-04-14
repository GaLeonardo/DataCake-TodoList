from xmlrpc.client import boolean
from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=140, blank=False)
    isCompleted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title