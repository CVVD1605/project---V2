# volunteer app - urls.py
# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .api_views import ProfileViewSet

# router = DefaultRouter()
# router.register(r'profiles', ProfileViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]


from django.urls import path
from .api_views import ProfileListCreateView, ProfileDetailView

urlpatterns = [
    # URL for listing all profiles or creating a new one
    path('profiles/', ProfileListCreateView.as_view(), name='profile-list-create'),
    
    # URL for retrieving, updating, or deleting a single profile by ID
    path('profiles/<int:pk>/', ProfileDetailView.as_view(), name='profile-detail'),
]

'''
1. Create a Profile (POST)

    Endpoint: /api/profiles/
    Process:
        The ProfileListCreateView handles the POST request.
        The ProfileSerializer creates the User and Profile objects.
        Passwords are hashed before saving for security.

2. Retrieve a Profile (GET)

    Endpoint: /api/profiles/<id>/
    Process:
        The ProfileDetailView handles the GET request.
        Retrieves the profile instance by its id (<id>).
        Returns the serialized profile data, including nested user information.

3. Update a Profile (PUT or PATCH)

    Endpoint: /api/profiles/<id>/
    Process:
        The ProfileDetailView handles the PUT or PATCH request.
        Updates fields in the Profile and User objects based on the data provided in the request.

4. Delete a Profile (DELETE)

    Endpoint: /api/profiles/<id>/
    Process:
        The ProfileDetailView handles the DELETE request.
        Deletes the specified Profile instance, including its linked User.

'''