# serializers.py
# from rest_framework import serializers
# from .models import Profile

# class ProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Profile
#         fields = '__all__'
#         extra_kwargs = {
#             'password': {'write_only': True}
#         }



from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile
from django.contrib.auth.hashers import make_password

# Serializer for the User model
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', 'first_name', 'last_name']
        extra_kwargs = {
            'password': {'write_only': True, 'style': {'input_type': 'password'}}  # Make password write-only and obfuscate input
        }

    # Create method to hash the password before saving the user
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])  # Hash the password for security
        return super().create(validated_data)

# Serializer for the Profile model
class ProfileSerializer(serializers.ModelSerializer):

    # Nested serializer for user information
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = [
            'id', 'user', 'profile_picture', 'phone_number', 'date_of_birth',
            'address', 'availability', 'status'
        ]

    # Custom create method to handle both user and profile creation
    def create(self, validated_data):
        user_data = validated_data.pop('user')  # Extract user data from the request
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)  # Use UserSerializer to create the user
        profile = Profile.objects.create(user=user, **validated_data)  # Create the profile linked to the user
        return profile

    # Custom update method to handle updates to both user and profile
    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', None)  # Check if user data is included in the request
        if user_data:
            user_serializer = UserSerializer(instance.user, data=user_data, partial=True)  # Update user fields
            if user_serializer.is_valid():
                user_serializer.save()
        return super().update(instance, validated_data)  # Update profile fields
