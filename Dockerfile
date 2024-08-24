# Use an official Nginx base image
FROM nginx:alpine

# Set the maintainer label (optional)
LABEL maintainer="you@example.com"

# Copy the website files to the Nginx default HTML directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
