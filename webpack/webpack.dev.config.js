var webpack = require("webpack");
var config  = require("./webpack.config.js");
var extend  = require("extend");

devConfig = {
  devtool: "eval",

  entry: [
    "webpack-dev-server/client?http://localhost:9090",
    "webpack/hot/only-dev-server"
  ].concat(config.entry),

  output: extend(config.output, { publicPath: "http://localhost:9090/" }),

  resolve: config.resolve,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ].concat(config.plugins),

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "react-hot!babel" },
    ].concat(config.module.loaders),
  },
};

module.exports = devConfig;
