FROM node:alphine
COPY . /app
WORKDIR /app
CMD node app.js