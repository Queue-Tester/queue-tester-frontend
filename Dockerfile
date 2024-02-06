# Stage 1: Build Angular Application
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package.json and install dependencies
COPY package.json package.json
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Stage 2: Serve Angular Application with Nginx
FROM nginx:stable-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app from the builder stage to nginx server directory
COPY --from=builder /usr/src/app/dist/rabbitmq-testing-frontend /usr/share/nginx/html

# Configure Nginx
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Command to start Nginx
CMD ["nginx"]
