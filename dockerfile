FROM node:14-alpine

COPY . /server

WORKDIR /server

RUN yarn

RUN yarn build

CMD ["yarn", "production"]