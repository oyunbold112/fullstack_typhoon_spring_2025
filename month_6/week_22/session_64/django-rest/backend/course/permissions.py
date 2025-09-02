# course/permissions.py
from rest_framework import permissions

class IsTeacherOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Унших эрх бүгдэд нээлттэй
        if request.method in permissions.SAFE_METHODS:
            return True
        # Засах, устгах эрх зөвхөн тухайн хичээлийн багшид
        return obj.teacher == request.user
