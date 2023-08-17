FROM node:lts-alpine

WORKDIR /var/www/outbreak-indicators

COPY . .

RUN yarn && \
    yarn build && \
    rm -rf node_modules && \
    yarn --production

CMD ["yarn", "start:prod"]
