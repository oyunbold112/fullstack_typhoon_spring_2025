# classroom/admin.py
from django.contrib import admin
from .models import Profile, Lesson, Reservation

admin.site.register(Profile)
admin.site.register(Lesson)
admin.site.register(Reservation)
