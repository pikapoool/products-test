FROM node:lts-alpine as build

WORKDIR /api
COPY . .
RUN npm install --quiet
EXPOSE 5000
CMD ["npm", "run", "dev"]
