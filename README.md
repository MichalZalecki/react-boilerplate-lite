# React Boilerlate Lite

[![CircleCI](https://circleci.com/gh/MichalZalecki/react-boilerplate-lite.svg?style=svg)](https://circleci.com/gh/MichalZalecki/react-boilerplate-lite)

💙 Using **TypeScript**? Checkout the [typescript](https://github.com/MichalZalecki/react-boilerplate-lite/tree/typescript) branch! 💙

**Read more:** [What's the best React boilderplate and why you cannot clone it from GitHub?](https://michalzalecki.com/the-best-react-boilerplate/)

React Boilerlate Lite is a minimal boilerplate for modern React apps build on **webpack 4** with **hot reloading** support.

Working with Heroku/Dokku out of the box.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Installation

```
git clone --depth 1 https://github.com/MichalZalecki/react-boilerplate-lite my-project
cd my-project
cp .env-example .env
npm install
```

## Usage

```
npm start                   # start server
npm run start:dashboard     # start server using webpack-dashboard
npm run build               # production build (remember to build with NODE_ENV=production)
npm run lint                # run ESLint
npm run format              # run prettier
npm run test                # run Jest
```
