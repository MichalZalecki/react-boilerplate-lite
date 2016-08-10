# React The Boring Part

Setup for React apps. It's not going to force you to use any specific toolset/framework. Be free and make **your** choice. *React The Boring Part* is just a setup which allows you to develop and deploy app without pain. It's not a bare minimum, although I tried to keep things simple.

## Usage

Start **Express** (serving files in production)

```bash
npm start
```

Start **WebpackDevServer** (for development)

```bash
npm run start:dev
```

Build (also run in *postinstall*)

```bash
NODE_ENV=production npm run build
```

Make sure you are creating React bundle in `production` environment.
