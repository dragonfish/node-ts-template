# Copy package.json and build node_modules 
FROM node:lts-alpine as build

WORKDIR /app

COPY package-lock.json package.json ./
RUN npm ci --production

# Copy node_modules from build and js files from local /build
FROM gcr.io/distroless/nodejs:16

WORKDIR /app
COPY --from=build /app/node_modules node_modules

COPY /build .

ENV NODE_ENV production

CMD ["index.js"]