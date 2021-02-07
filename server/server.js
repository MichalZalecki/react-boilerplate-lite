require("dotenv").config({ silent: true });

const express = require("express");
const compression = require("compression");
const path = require("path");
const logger = require("./middleware/logger");

const app = express();

app.set("x-powered-by", false);

app.use(compression());
app.use(logger);

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("build", "index.html"));
});

const server = app.listen(process.env.PORT || 8080, () => {
  console.log("Server started at port %d\n", server.address().port);
});
