# classroom/views.py
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import UserRegisterForm, LessonForm, ReservationForm
from .decorators import teacher_required, student_required
from .models import Lesson, Reservation

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'{username}-н бүртгэл амжилттай үүслээ! Та одоо нэвтэрч орно уу.')
            return redirect('login')
    else:
        form = UserRegisterForm()
    return render(request, 'classroom/register.html', {'form': form})

@login_required
def home(request):
    if hasattr(request.user, 'profile'):
        if request.user.profile.user_type == 'teacher':
            return redirect('teacher_dashboard')
        else:
            return redirect('student_dashboard')
    # Хэрэв ямар нэг шалтгаанаар профайл байхгүй бол анхдагч шилжүүлэлт
    return redirect('login')


# --- Багшийн Үзэгдэл ---
@login_required
@teacher_required
def teacher_dashboard(request):
    lessons = Lesson.objects.filter(teacher=request.user)
    return render(request, 'classroom/teacher_dashboard.html', {'lessons': lessons})

@login_required
@teacher_required
def create_lesson(request):
    if request.method == 'POST':
        form = LessonForm(request.POST)
        if form.is_valid():
            lesson = form.save(commit=False)
            lesson.teacher = request.user
            lesson.save()
            return redirect('teacher_dashboard')
    else:
        form = LessonForm()
    return render(request, 'classroom/create_lesson.html', {'form': form})

@login_required
@teacher_required
def add_reservation_slot(request, lesson_id):
    lesson = get_object_or_404(Lesson, id=lesson_id, teacher=request.user)
    if request.method == 'POST':
        form = ReservationForm(request.POST)
        if form.is_valid():
            reservation = form.save(commit=False)
            reservation.lesson = lesson
            reservation.save()
            return redirect('teacher_dashboard')
    else:
        form = ReservationForm()
    return render(request, 'classroom/add_reservation_slot.html', {'form': form, 'lesson': lesson})

# --- Оюутны Үзэгдэл ---
@login_required
@student_required
def student_dashboard(request):
    booked_reservations = Reservation.objects.filter(student=request.user, is_booked=True)
    return render(request, 'classroom/student_dashboard.html', {'reservations': booked_reservations})

@login_required
@student_required
def available_classes(request):
    available = Reservation.objects.filter(is_booked=False).order_by('reservation_time')
    return render(request, 'classroom/available_classes.html', {'reservations': available})

@login_required
@student_required
def book_class(request, reservation_id):
    reservation = get_object_or_404(Reservation, id=reservation_id, is_booked=False)
    if request.method == 'POST':
        reservation.student = request.user
        reservation.is_booked = True
        reservation.save()
        messages.success(request, f'Та {reservation.lesson.title} хичээлийг амжилттай захиаллаа.')
        return redirect('student_dashboard')

    return render(request, 'classroom/book_class_confirm.html', {'reservation': reservation})