FROM node:latest 

# Set the working directory in the container to /app
# This is where the application code will be copied to
WORKDIR /app
COPY  package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
