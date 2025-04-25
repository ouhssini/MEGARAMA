FROM node:latest 

# Set the working directory in the container to /app
# This is where the application code will be copied to
WORKDIR /app
COPY  package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
# docker build -t films:latest .
# docker run -d -p 3000:3000 --name films films:latest