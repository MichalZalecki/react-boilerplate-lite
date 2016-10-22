const config = require("./webpack.config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const prodConfig = {
  devtool: "source-map",

  entry: config.entry,

  resolve: config.resolve,

  output: config.output,

  plugins: [
    new ExtractTextPlugin("styles.[hash].css"),
  ].concat(config.plugins),

  module: {
    loaders: [
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap&importLoaders=1!postcss"),
      },
    ].concat(config.module.loaders),
  },

  postcss: config.postcss,
};

module.exports = prodConfig;
