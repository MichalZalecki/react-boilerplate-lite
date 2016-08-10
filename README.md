# React The Boring Part

Setup for React apps. It's not going to force you to use any specific toolset/framework. Be free
and make **your** choice. *React The Boring Part* is just a setup which allows you to develop
and deploy app without pain. It's not a bare minimum, although I've tried to keep things simple.

Working with Heroku/Dokku out of the box.

## Usage

Start **express** (serving files in production).

```bash
npm start
```

Start **webpack-dev-server** (for development).

```bash
npm run start:dev
```

Build (also run in `postinstall`). Make sure you are creating React bundle in `production`
environment.

```bash
NODE_ENV=production npm run build
```

You can specify `PORT` for both: development and production server (default to `8080`).

```
PORT=5000 npm start
PORT=8081 npm run start:dev
```
