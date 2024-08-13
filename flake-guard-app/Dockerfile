FROM node:20.12

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install
RUN npm install -g ts-node
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["ts-node", "./src/server/server.ts"]
