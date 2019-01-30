FROM node:8

EXPOSE 3000

ADD package-lock.json /server/

ADD qa-api /server/

ADD setting /server/

ADD qa-react /server/qa-react/

WORKDIR /server/

RUN npm install -g /server/qa-react/

CMD ["npm", "start", "--prefix", "/server/qa-react/"]