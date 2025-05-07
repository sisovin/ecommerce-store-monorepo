# Use Node.js base image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build backend
RUN npm run build

# Expose port
EXPOSE 3000

# Set entrypoint
CMD ["node", "dist/main.js"]
