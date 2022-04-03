FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm install --production

cmd ["npm", "start"]

