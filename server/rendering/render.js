const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Helmet = require("react-helmet").default;
const { StaticRouter } = require("react-router-dom");
const { createStore } = require("redux");
const { Provider } = require("react-redux");
const { devMiddleware } = require("../middleware/webpack");

function getTemplate() {
  if (process.env.NODE_ENV === "production") {
    return fs.readFileSync(path.resolve("build/index.html"), "utf8");
  }

  return devMiddleware.fileSystem.readFileSync(path.resolve("build/index.html"), "utf8");
}

function render(req, res, preloadedState) {
  const context = {};

  const { default: App } = require("../../build/app.server");
  const { default: rootReducer } = require("../../build/rootReducer.server");

  if (process.env.NODE_ENV !== "production") {
    delete require.cache[require.resolve("../../build/app.server")];
    delete require.cache[require.resolve("../../build/rootReducer.server")];
  }

  const store = createStore(rootReducer, preloadedState);

  const template = getTemplate();

  const body = ReactDOMServer.renderToString(
    React.createElement(Provider, { store },
      React.createElement(StaticRouter, { location: req.url, context },
        React.createElement(App)
      )
    )
  );

  const helmet = Helmet.renderStatic();

  const html = template
    .replace("<div id=\"root\"></div>", `<div id="root">${body}</div>`)
    .replace("</head>", `${helmet.title.toString()}</head>`)
    .replace("</head>", `<script>window.__PRELOADED_STATE__=${JSON.stringify(preloadedState)};</script></head>`);

  if (context.url) {
    res.redirect(context.status, context.url);
  } else {
    res.status(context.status || 200).send(html);
  }
}

module.exports = render;
