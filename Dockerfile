# DEV: Contains only dependencies, code is mapped in at runtime
FROM node:12.13-alpine as dev

LABEL maintainer="https://github.com/kaizendorks"

WORKDIR /home/node/app

COPY package.json package-lock.json ./
RUN npm install

CMD ["npm", "run", "serve"]

# BUILD: Contains all dependencies and code, making it a good target for CI jobs
FROM dev as build

COPY . .
RUN npm run build

# PROD: Production optimized distribution with NO dev dependencies.
FROM nginx:1.14-alpine as prod

COPY --from=build /home/node/app/dist /usr/share/nginx/html
