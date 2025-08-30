# classroom/decorators.py
from django.core.exceptions import PermissionDenied

def teacher_required(function):
    def wrap(request, *args, **kwargs):
        if hasattr(request.user, 'profile') and request.user.profile.user_type == 'teacher':
            return function(request, *args, **kwargs)
        else:
            raise PermissionDenied
    return wrap

def student_required(function):
    def wrap(request, *args, **kwargs):
        if hasattr(request.user, 'profile') and request.user.profile.user_type == 'student':
            return function(request, *args, **kwargs)
        else:
            raise PermissionDenied
    return wrap
