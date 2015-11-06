var path              = require("path");
var HTMLWebpackPlugin = require("html-webpack-plugin");

var config = {
  entry: [
    path.resolve("src/index.js"),
  ],

  output: {
    path: path.resolve("build"),
    filename: "app.js",
  },

  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      "app": path.resolve("src"),
    }
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
    }),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel", query: {
        presets: ["es2015", "stage-0", "react"],
      } },
    ],
  }
};

module.exports = config;
