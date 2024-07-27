FROM node:20.12

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["node", "./src/server/buildServer.js"]
