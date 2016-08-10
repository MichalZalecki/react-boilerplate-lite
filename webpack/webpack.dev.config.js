const webpack = require("webpack");
const config = require("./webpack.config");
const extend = require("extend");

const PORT = process.env.PORT || 8080;

const devConfig = {
  devtool: "inline-source-map",

  entry: [
    `webpack-dev-server/client?http://localhost:${PORT}`,
    "webpack/hot/only-dev-server",
  ].concat(config.entry),

  output: extend(config.output, { publicPath: `http://localhost:${PORT}/` }),

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
