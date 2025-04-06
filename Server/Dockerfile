# DockerFile to create an inamge of medusa backend and frontend deployment

# Using FROM to tell docker to use node:22-alpine image
FROM node:22-alpine

# Using WORKDIR to define the working directory in the image
WORKDIR /.medusa/server

# Using COPY to copy all project build files under Medusa folder(Dockerfile is in same folder)
COPY Server .

# Using RUN command to tell docker to install npm dependencies inside the container and build the project
RUN npm install --production
COPY docker-entrypoint.sh .
RUN export NODE_ENV=production

# Make entrypoint script executable
RUN chmod +x ./docker-entrypoint.sh

# Using EXPOSE to tell docker to expose port 9000 container
EXPOSE 9000

# Run with custom entrypoint
ENTRYPOINT ["./docker-entrypoint.sh"]
