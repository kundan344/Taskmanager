FROM node:21-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=8080

CMD ["node", "server.js"]
