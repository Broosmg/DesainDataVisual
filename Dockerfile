FROM node:lts

WORKDIR /var/www/outbreak-indicators

COPY . .

RUN yarn && \
    yarn build

CMD ["yarn", "start:prod"]
