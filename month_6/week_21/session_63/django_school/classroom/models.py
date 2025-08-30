# classroom/models.py
from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    USER_TYPE_CHOICES = (
        ('student', 'Оюутан'),
        ('teacher', 'Багш'),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES)

    def __str__(self):
        return f'{self.user.username} - {self.get_user_type_display()}'

class Lesson(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    teacher = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'profile__user_type': 'teacher'})

    def __str__(self):
        return self.title

class Reservation(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    student = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, limit_choices_to={'profile__user_type': 'student'})
    reservation_time = models.DateTimeField()
    is_booked = models.BooleanField(default=False)

    def __str__(self):
        status = "Захиалсан" if self.is_booked else "Боломжтой"
        student_name = self.student.username if self.is_booked else "Хоосон"
        return f'{self.lesson.title} хичээл {self.reservation_time.strftime("%Y-%m-%d %H:%M")} (Оюутан: {student_name}, Төлөв: {status})'
