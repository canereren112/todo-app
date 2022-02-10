# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /Applications/app

# Add the source code to app
COPY ./ /Applications/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /Applications/app/dist/todo-frontend /opt/homebrew/var/www 

# Expose port 80
EXPOSE 80