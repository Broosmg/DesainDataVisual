FROM node:20.9.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV DB_USERNAME=postgres
ENV DB_PASSWORD=sultanbabulah
ENV DB_NAME=visualdata
EXPOSE 8080
CMD ["npm", "run", "start"]
