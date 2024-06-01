FROM node:20.9.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV DB_PORT=5432
ENV DB_HOST=34.41.54.244
ENV DB_USERNAME=postgres
ENV DB_PASSWORD=sultanbabulah
ENV DB_NAME=postgres
EXPOSE 8080
CMD ["npm", "run", "start"]
