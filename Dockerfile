FROM node:16-alpine3.12

WORKDIR /usr/app/parktempo

COPY package*.json ./
RUN npm ci
COPY . .

EXPOSE $PORT

CMD npm run prod