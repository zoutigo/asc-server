FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install
RUN npm run migration:run

COPY . .

ENV DOCKER=ENABLE

CMD npm run start:dev