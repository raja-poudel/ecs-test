FROM node:14-alpine
WORKDIR ./app
COPY ./package.json ./package.json
RUN npm i
COPY ./* ./
CMD [ "npm", "start" ]
