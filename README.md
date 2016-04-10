# React The Boring Part

Setup for React apps. It's not going to force you to use any specyfic toolset/framework. Be free and make **your** choice. *React The Boring Part* is just a setup which allows you to develop and deploy app without pain. It's not a bare minimum, although I tried to keep things simple.

## Usage

Start **Express** (serving files in production)

```bash
npm start
```

Start **WebpackDevServer** (for development)

```bash
npm run dev
```

Build (also run in *postinstall*)

```bash
NODE_ENV=production npm run build
```

Make sure you are creating React bundle in `production` environment.

## You aren't using React?

Check out pure [EcmaScript 2016+ The Boring Part](https://github.com/MichalZalecki/react-the-boring-part/tree/pure-es) branch!

## Are you testing with Karma and Webpack?

Check out [Run tests with Karma and Webpack](https://github.com/MichalZalecki/react-the-boring-part/tree/karma-webpack) branch!
