# users/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['username', 'email', 'role', 'is_staff']
    fieldsets = ( (None, {'fields': ('username', 'password')}), ('Personal info', {'fields': ('first_name', 'last_name', 'email')}), ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}), ('Important dates', {'fields': ('last_login', 'date_joined')}), ('Custom Fields', {'fields': ('role',)}), )
    add_fieldsets = ( (None, { 'classes': ('wide',), 'fields': ('username', 'email', 'role', 'password', 'password2'), }), )

admin.site.register(CustomUser, CustomUserAdmin)