FROM node:12.16.1-alpine
EXPOSE 8080

WORKDIR /home/app

# Dependencies

COPY package.json /home/app/
COPY yarn.lock /home/app/

RUN yarn install

# Environment

ENV NODE_ENV=production

# Build

COPY . /home/app/
RUN yarn build

# Run

CMD yarn start
