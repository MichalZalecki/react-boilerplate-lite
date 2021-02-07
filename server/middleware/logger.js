const morgan = require("morgan");

function logger(...args) {
  morgan("common")(...args);
}

module.exports = logger;
