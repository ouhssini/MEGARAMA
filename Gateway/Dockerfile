FROM node:latest

WORKDIR /app
COPY  package*.json ./
RUN npm install
COPY . .
EXPOSE 3010
CMD ["node", "index.js"]
