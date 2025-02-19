# Use Node.js for building React
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build React app
COPY . .
RUN npm run build

# Use a lightweight Nginx web server
FROM nginx:1.23-alpine

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built React app (keeping /dist)
COPY --from=build /app/dist /usr/share/nginx/html

# Ensure proper permissions
RUN chmod -R 755 /usr/share/nginx/html

# Cloud Run requires the service to listen on 8080
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
