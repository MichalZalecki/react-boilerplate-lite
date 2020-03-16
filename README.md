# React Boilerlate Lite

[![CircleCI](https://circleci.com/gh/MichalZalecki/react-boilerplate-lite.svg?style=svg)](https://circleci.com/gh/MichalZalecki/react-boilerplate-lite)

💙 Using **TypeScript**? Checkout the [typescript](https://github.com/MichalZalecki/react-boilerplate-lite/tree/typescript) branch! 💙

**Read more:** [What's the best React boilderplate and why you cannot clone it from GitHub?](https://michalzalecki.com/the-best-react-boilerplate/)

React Boilerlate Lite is a minimal boilerplate for modern React apps build on **webpack** with **hot reloading** support.

## Deploy

### Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Docker

    docker build -t react-boilerlate-lite .
    docker run --rm -it -p 8080:8080 react-boilerlate-lite

or

    docker-compose up

## Installation

```
git clone --depth 1 https://github.com/MichalZalecki/react-boilerplate-lite my-project
cd my-project
cp .env-example .env
yarn install
```

## Usage

```
yarn start                # start server
yarn build                # production build (remember to build with NODE_ENV=production)
yarn start:dashboard      # start server using webpack-dashboard
yarn lint                 # run ESLint
yarn format               # run prettier
yarn test                 # run Jest
```
