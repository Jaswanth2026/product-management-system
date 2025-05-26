# Use Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the backend's package files first (for caching npm install)
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend app source code
COPY backend/ ./

# Expose port (if your backend runs on a port like 3000)
EXPOSE 3000

# Start the backend app
CMD ["npm", "start"]
