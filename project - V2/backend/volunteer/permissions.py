#volunteer/permissions.py
from rest_framework import permissions

class IsAuthenticatedOrCreate(permissions.BasePermission):
    """
    Custom permission to allow access to profile creation without authentication.
    For other actions, authentication is required.
    """
    def has_permission(self, request, view):
        # Allow access for the 'POST' method to create a profile (no authentication needed)
        if request.method == 'POST':
            return True
        # For other methods (GET, PUT, DELETE), check if the user is authenticated
        return request.user and request.user.is_authenticated
