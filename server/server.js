var express = require("express");
var path    = require("path");

var server = express();

server.get(/^\/(app.(js|css))/, function (req, res) {
  if ( process.env.NODE_ENV === "production" )
    res.sendFile(path.join(__dirname, "..", "build", req.params[0]))
  else
    res.redirect("//localhost:9090/" + req.params[0])
});

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"))
});

var listener = server.listen(process.env.PORT || 8080, function () {
  console.log("Express server listening on port %d", listener.address().port)
});
