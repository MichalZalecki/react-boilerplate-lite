const webpack = require("webpack");
const config = require("./webpack.config");

const devConfig = {
  devtool: "eval",

  entry: [
    "webpack-hot-middleware/client?reload=true",
  ].concat(config.entry),

  output: config.output,

  resolve: config.resolve,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ].concat(config.plugins),

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "react-hot" },
      { test: /\.css$/,
        loaders: [
          "style",
          "css?sourceMap&localIdentName=[local]---[hash:base64:5]&importLoaders=1",
          "postcss",
        ],
      },
    ].concat(config.module.loaders),
  },

  postcss: config.postcss,
};

module.exports = devConfig;
