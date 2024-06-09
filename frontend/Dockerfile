FROM node:21 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:21-slim

WORKDIR /app

COPY --from=build /app/build /app/build

RUN npm install -g serve

CMD ["serve", "-s", "build"]
