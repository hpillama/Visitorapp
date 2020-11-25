#base image
FROM node:lts-alpine

#install dependencies
WORKDIR /usr/Visitorwellcome

COPY ./package.json ./
RUN npm install
COPY ./ ./

#startup command
CMD ["npm", "start"]
