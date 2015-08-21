var path    = require("path");
var webpack = require("webpack");

var config = {
  entry: [
    path.join(__dirname, "..", "src", "index.js"),
  ],

  output: {
    path: path.join(__dirname, "..", "build"),
    filename: "app.js",
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [],

  module: {
    loaders: [],
  }
};

module.exports = config;
