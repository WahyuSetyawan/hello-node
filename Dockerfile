FROM alpine
RUN apk update && apk upgrade
RUN apk add nodejs npm

WORKDIR /app
COPY package*.json ./
RUN npm install -g nodemon
RUN npm install

COPY . .
ENV PORT=8080
EXPOSE 8080

ENTRYPOINT [ "nodemon", "src/index.js" ]
