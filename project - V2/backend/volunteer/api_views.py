# api_views.py

# from rest_framework import viewsets
# # Importing Profile model from models.py - Change according to your model
# from .models import Profile  
# # Importing ProfileSerializer from serializers.py - Change according to your serializer               
# from .serializers import ProfileSerializer   

# class ProfileViewSet(viewsets.ModelViewSet):
#     queryset = Profile.objects.all()
#     serializer_class = ProfileSerializer

# volunteer/api_views.py
from rest_framework import generics
from .models import Profile
from .serializers import ProfileSerializer
from .permissions import IsAuthenticatedOrCreate

# View to handle listing and creating profiles
class ProfileListCreateView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()  # Fetch all profile objects from the database
    serializer_class = ProfileSerializer  # Use the ProfileSerializer for validation and data handling
    permission_classes = [IsAuthenticatedOrCreate]  # Apply the custom permission class

# View to handle retrieving, updating, and deleting a single profile
class ProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()  # Fetch all profile objects from the database
    serializer_class = ProfileSerializer  # Use the ProfileSerializer for validation and data handling


'''
   
Key Features in Code:
    Separation of Concerns:
        UserSerializer handles user-related data (username, email, password, etc.).
        ProfileSerializer handles profile-specific data (profile picture, phone number, etc.).

    Reusable Components:
        UserSerializer can be reused for other APIs involving user data.
        ProfileSerializer combines user and profile data for seamless integration.

    Nested Relationships:
        The ProfileSerializer nests the UserSerializer, allowing for combined user-profile operations in one API call.

    Security:
        Passwords are hashed using Django's make_password method to ensure they're not stored in plaintext.

    Generic Views:
        ListCreateAPIView and RetrieveUpdateDestroyAPIView reduce boilerplate code and make it easy to extend.
'''