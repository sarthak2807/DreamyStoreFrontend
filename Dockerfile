
FROM node:19-alpine3.15
MAINTAINER Sarthak

WORKDIR /dreamy

COPY ./dreamy-store .

RUN npm install 

EXPOSE 3000

CMD ["npm","start"]

