var config            = require("./webpack.config.js");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var prodConfig = {
  devtool: "source-map",

  entry: config.entry,

  resolve: config.resolve,

  output: config.output,

  plugins: [
    new ExtractTextPlugin("styles.css"),
  ].concat(config.plugins),

  module: {
    loaders: [
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap!postcss"),
      },
    ].concat(config.module.loaders),
  },

  postcss: config.postcss,
};

module.exports = prodConfig;
