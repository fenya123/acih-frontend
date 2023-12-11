FROM node:16.14.0-slim

WORKDIR /acih-frontend

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./
