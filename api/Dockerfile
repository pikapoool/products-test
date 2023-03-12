FROM node:lts-alpine as build

WORKDIR /api
COPY . .
RUN npm install --quiet
CMD ["npm", "run", "dev"]
