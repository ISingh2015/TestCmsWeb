FROM node:11.15.0-alpine as build-app
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . . 
RUN npm run build

FROM ngnix:1.16.0-alpine as deploy-app
COPY --from=build-app /app/dist/testcmsdemo /usr/share/ngnix/html
EXPOSE 4300
CMD ["ngnix", "-g", "daemon off:"]