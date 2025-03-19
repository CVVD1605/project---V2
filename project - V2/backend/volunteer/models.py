#volunteer/models.py

from django.db import models

from django.contrib.auth.models import User


class Profile(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    ]
    # Auth User Model
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    # Profile picture
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)

    
    # Basic Information
    # first_name = models.CharField(max_length=50) 
    # last_name = models.CharField(max_length=50) 
    # email = models.EmailField(unique=True) 

    # # Password field
    # password = models.CharField(max_length=128, blank=True, null=True, default="DefaultPassword")

    # Optional fields
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)

    # Registration Information
    # registration_date = models.DateField() - auth_user.date_joined
    availability = models.CharField(max_length=100, blank=True, null=True)

    # Status with predefined choices
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')

    def __str__(self):
        return f"{self.first_name} {self.last_name}"