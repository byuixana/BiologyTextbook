# This is where the build turns when 'docker build' is run. 
FROM node:20-alpine AS build

# Sets the working directory to /app
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . . 
RUN npm run build

FROM nginx:alpine
# Copies the build output to the nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Opens the proper port where nginx will be listening.
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]