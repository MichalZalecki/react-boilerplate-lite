const express = require("express");
const path = require("path");

const server = express();

server.use(express.static("build"));

server.get("*", (req, res) => {
  res.sendFile(path.resolve("build/index.html"));
});

const listener = server.listen(process.env.PORT || 8080, () => {
  console.log("express started at http://localhost:%d", listener.address().port);
});
