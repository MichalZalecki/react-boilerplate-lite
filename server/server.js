require("dotenv").config({ silent: true });

const express = require("express");
const compression = require("compression");
const fs = require("fs");
const logger = require("./middleware/logger");
const { devMiddleware, hotMiddleware } = require("./middleware/webpack");

const app = express();

app.set("x-powered-by", false);

app.use(compression());
app.use(logger);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build", {
    // etag: false
  }));
} else {
  app.use(devMiddleware);
  app.use(hotMiddleware);
}

app.get("*", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    res.write(fs.readFileSync("build/index.html"));
  } else {
    res.write(devMiddleware.fileSystem.readFileSync("build/index.html"));
  }
  res.end();
});

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log("Express started at http://localhost:%d\n", listener.address().port);
  if (process.env.NODE_ENV !== "production") {
    console.log("Waiting for webpack...\n");
  }
});
