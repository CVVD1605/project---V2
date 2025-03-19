# Dockerfile for Django backend 

# Use the official Python image from the Docker Hub
FROM python:3.10

# Set the working directory in the container
WORKDIR /app

# Copy the requirements.txt file into the container
COPY requirements.txt /app/

# Install the dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire project into the container
COPY . /app/

# Copy the wait-for-it.py script into the container
COPY wait-for-it.py /app/

# Collect static files (for production)
RUN python manage.py collectstatic --noinput

# Expose port 8000 for the Django app
EXPOSE 8000

# Specify the command to run the Django development server
CMD ["sh", "-c", "python wait-for-it.py && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
