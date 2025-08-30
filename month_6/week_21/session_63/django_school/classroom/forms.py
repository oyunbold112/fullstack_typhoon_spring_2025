# classroom/forms.py
from django import forms
from django.contrib.auth.models import User
from .models import Profile, Lesson, Reservation

class UserRegisterForm(forms.ModelForm):
    USER_TYPE_CHOICES = (
        ('student', 'Оюутан'),
        ('teacher', 'Багш'),
    )
    user_type = forms.ChoiceField(choices=USER_TYPE_CHOICES, widget=forms.RadioSelect, label="Хэрэглэгчийн төрөл")
    password = forms.CharField(widget=forms.PasswordInput, label="Нууц үг")

    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        labels = {
            'username': "Нэвтрэх нэр",
            'email': "И-мэйл"
        }

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password"])
        if commit:
            user.save()
            Profile.objects.create(
                user=user,
                user_type=self.cleaned_data['user_type']
            )
        return user

class LessonForm(forms.ModelForm):
    class Meta:
        model = Lesson
        fields = ['title', 'description']
        labels = {
            'title': "Хичээлийн нэр",
            'description': "Тайлбар"
        }

class ReservationForm(forms.ModelForm):
    class Meta:
        model = Reservation
        fields = ['reservation_time']
        labels = {
            'reservation_time': "Захиалгын цаг"
        }
        widgets = {
            'reservation_time': forms.DateTimeInput(attrs={'type': 'datetime-local'}),
        }
