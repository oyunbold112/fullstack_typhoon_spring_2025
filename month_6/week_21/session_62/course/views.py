# course/views.py
from django.shortcuts import render, get_object_or_404, redirect
from .models import Course
from .forms import CourseForm
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied

def course_list(request):
    courses = Course.objects.all().order_by('-created_at')
    return render(request, 'course/course_list.html', {'courses': courses})

def course_detail(request, pk):
    course = get_object_or_404(Course, pk=pk)
    return render(request, 'course/course_detail.html', {'course': course})

@login_required
def course_create(request):
    if request.user.role != 'teacher':
        raise PermissionDenied
    if request.method == 'POST':
        form = CourseForm(request.POST)
        if form.is_valid():
            course = form.save(commit=False)
            course.teacher = request.user
            course.save()
            return redirect('course_list')
    else:
        form = CourseForm()
    return render(request, 'course/course_form.html', {'form': form})

@login_required
def course_update(request, pk):
    course = get_object_or_404(Course, pk=pk)
    if course.teacher != request.user:
        raise PermissionDenied
    if request.method == 'POST':
        form = CourseForm(request.POST, instance=course)
        if form.is_valid():
            form.save()
            return redirect('course_list')
    else:
        form = CourseForm(instance=course)
    return render(request, 'course/course_form.html', {'form': form})

@login_required
def course_delete(request, pk):
    course = get_object_or_404(Course, pk=pk)
    if course.teacher != request.user:
        raise PermissionDenied
    if request.method == 'POST':
        course.delete()
        return redirect('course_list')
    return render(request, 'course/course_confirm_delete.html', {'course': course})
