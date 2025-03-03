FROM node:23-alpine3.20

WORKDIR /app

COPY . /app/

RUN yarn && yarn build

EXPOSE 3000

CMD ["yarn", "start"]