const webpack = require("webpack");
const config = require("./webpack.config.js");
const extend = require("extend");

const devConfig = {
  devtool: "inline-source-map",

  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server"
  ].concat(config.entry),

  output: extend(config.output, { publicPath: "http://localhost:8080/" }),

  resolve: config.resolve,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ].concat(config.plugins),

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "react-hot" },
      { test: /\.css$/, loader: "style!css?sourceMap!postcss" },
    ].concat(config.module.loaders),
  },

  postcss: config.postcss,
};

module.exports = devConfig;
