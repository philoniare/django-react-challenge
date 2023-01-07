from django.db import models


class Question(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    prompt = models.TextField()

    class Meta:
        ordering = ['created']