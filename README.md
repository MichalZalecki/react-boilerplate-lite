# React Boilerlate Lite

[![CircleCI](https://img.shields.io/circleci/project/github/MichalZalecki/react-boilerplate-lite.svg?style=flat-square)]()
[![bitHound](https://img.shields.io/bithound/dependencies/github/rexxars/sse-channel.svg?style=flat-square)](https://github.com/MichalZalecki/react-boilerplate-lite/)

React Boilerlate Lite is a minimal boilerplate for modern React apps build on **webpack 3** with **hot reloading** support. It's not opinionated on any state management library or testing framework. Develop and deploy without pain using tools you want.

Working with Heroku/Dokku out of the box.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Installation

```
git clone --depth 1 https://github.com/MichalZalecki/react-boilerplate-lite project
cd project
cp .env-example .env
npm install
```

## Usage

```
npm start                   # start server
npm run start:dashboard     # start server using webpack-dashboard
npm run build               # production build (remember to build with NODE_ENV=production)
npm run build:server        # SSR build (run with -- --wtach for development)
```

## Extras

* [What's the best React boilderplate and why you cannot clone it from GitHub?](https://michalzalecki.com/the-best-react-boilerplate/)
* [Try with TypeScript](https://github.com/MichalZalecki/react-boilerplate-lite/tree/typescript)
