# classroom/urls.py
from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    # Ерөнхий & Нэвтрэлт
    path('', views.home, name='home'),
    path('register/', views.register, name='register'),
    path('login/', auth_views.LoginView.as_view(template_name='classroom/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='classroom/logout.html'), name='logout'),

    # Багшид зориулсан
    path('teacher/', views.teacher_dashboard, name='teacher_dashboard'),
    path('teacher/lesson/new/', views.create_lesson, name='create_lesson'),
    path('teacher/lesson/<int:lesson_id>/add_slot/', views.add_reservation_slot, name='add_reservation_slot'),

    # Оюутанд зориулсан
    path('student/', views.student_dashboard, name='student_dashboard'),
    path('student/classes/', views.available_classes, name='available_classes'),
    path('student/book/<int:reservation_id>/', views.book_class, name='book_class'),
]
