FROM node:16.14.0-slim as acih-fe-build

WORKDIR /app

RUN apt-get update

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM nginx:1.20 as nginx

COPY --from=acih-fe-build /app/dist/dev /usr/share/nginx/html

COPY envs/qa/deploy/nginx/nginx.conf /etc/nginx/conf.d/default.conf
