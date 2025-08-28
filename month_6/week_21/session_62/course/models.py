# course/models.py
from django.db import models
from django.conf import settings

class Course(models.Model):
    title = models.CharField(max_length=200, verbose_name='Хичээлийн нэр')
    description = models.TextField(verbose_name='Тайлбар')
    teacher = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name='Багш')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
