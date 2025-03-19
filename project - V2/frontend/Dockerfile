# Dockerfile for React frontend

# Use the official Node.js image from the Docker Hub
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package.json package-lock.json /app/

# Install the dependencies
RUN npm install

# Copy the entire project into the container
COPY . /app/

# Build the React application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Specify the command to start the React application
CMD ["npm", "start"]
