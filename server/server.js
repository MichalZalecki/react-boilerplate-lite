require("dotenv").config({ silent: true });

const express = require("express");
const compression = require("compression");
const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { StaticRouter } = require("react-router-dom");

const logger = require("./middleware/logger");
const { devMiddleware, hotMiddleware } = require("./middleware/webpack");

const app = express();

app.set("x-powered-by", false);

app.use(compression());
app.use(logger);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build", {
    index: false,
    // etag: false
  }));
} else {
  app.use(devMiddleware);
  app.use(hotMiddleware);
}

function getTemplate() {
  if (process.env.NODE_ENV === "production") {
    return fs.readFileSync(path.resolve("build/index.html"), "utf8");
  }
  return devMiddleware.fileSystem.readFileSync(path.resolve("build/index.html"), "utf8");
}

function render(req, context) {
  const App = require("../build/app.server").default;
  const template = getTemplate();
  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App))
  );

  const html = template
    .replace("<div id=\"root\"></div>", `<div id="root">${body}</div>`);

  return html;
}

app.get("*", (req, res) => {
  const context = {};
  const html = render(req, context);

  res.send(html);
});

const server = app.listen(process.env.PORT || 8080, () => {
  console.log("Express started at http://localhost:%d\n", server.address().port);
  if (process.env.NODE_ENV !== "production") {
    console.log("Waiting for webpack...\n");
  }
});
