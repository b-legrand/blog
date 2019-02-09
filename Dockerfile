FROM node:10

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm i -g @angular/cli@^7.0.0

RUN npm ci
