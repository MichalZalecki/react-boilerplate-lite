const morgan = require("morgan");

function logger(...args) {
  if (process.env.NODE_ENV === "production") {
    morgan("tiny")(...args);
  } else {
    morgan("dev")(...args);
  }
}

module.exports = logger;
