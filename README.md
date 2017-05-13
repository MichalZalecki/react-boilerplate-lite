# React Boilerlate Lite

[![bitHound](https://img.shields.io/bithound/dependencies/github/rexxars/sse-channel.svg?style=flat-square)](https://github.com/MichalZalecki/react-boilerplate-lite/)

React Boilerlate Lite is a minimal boilerplate for modern React apps build on **webpack 2** with **hot reloading** support. It's not opinionated on any state management library or testing framework. Develop and deploy without pain using tools you want.

Working with Heroku/Dokku out of the box.

## Installation

```
git clone --depth 1 https://github.com/MichalZalecki/react-boilerplate-lite project
cd project
cp .env-example .env
npm install
```

## Usage

```
npm start                   # start production server
npm run start:dev           # start development server (webpack.dev.config.js)
npm run start:dashboard     # start development server using webpack-dashboard
npm run build               # production build (remember to build with NODE_ENV=production)
```
