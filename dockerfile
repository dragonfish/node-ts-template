# Copy package.json and build node_modules 
FROM node:alpine as build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --production

# The instructions for second stage
FROM node:alpine

ENV NODE_ENV production

WORKDIR /usr/src/app
COPY --from=build node_modules node_modules

COPY . .

CMD ["node", "build/index.js"]