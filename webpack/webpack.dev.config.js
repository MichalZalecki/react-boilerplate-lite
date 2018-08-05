const webpack = require("webpack");
const config = require("./webpack.config");

const CSS_LOADER_OPTIONS = "sourceMaps&localIdentName=[name]--[hash:base64:5]";

module.exports = {
  mode: "development",

  devtool: "cheap-module-eval-source-map", // use eval for faster builds/poor debugging

  entry: {
    app: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client?reload=true",
      ...config.entry.app,
    ],
  },

  resolve: config.resolve,

  output: config.output,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    ...config.plugins,
  ],

  module: {
    rules: [
      ...config.module.rules,
      { test: /\.css$/, loader: ["style-loader", `css-loader?${CSS_LOADER_OPTIONS}`] },
    ],
  },
};
