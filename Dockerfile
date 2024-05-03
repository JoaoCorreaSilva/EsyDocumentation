FROM node:latest

ENV http_proxy=http://172.0.0.1:3128/https_proxy=http://172.0.0.1:3128

WORKDIR /esy

COPY package.json ./

RUN npm install

COPY . /esy

EXPOSE 3000

CMD ["npm", "start"]