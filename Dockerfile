# Stage 1: Build & Lint
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies exactly as they are in your lockfile
COPY package*.json ./
RUN npm ci || npm install --legacy-peer-deps

# Copy the rest of your source code
COPY . .

# Run the linter (This will stop the build if code is messy)
RUN npm run lint

# Create the production build folder
RUN npm run build

# Stage 2: Final Production-Ready Image
FROM nginx:stable-alpine
# Copy the 'build' folder from the builder stage into Nginx
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
