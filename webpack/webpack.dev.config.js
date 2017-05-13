const webpack = require("webpack");
const config = require("./webpack.config");

const CSS_LOADER_OPTIONS = "localIdentName=[local]--[hash:base64:5]";

module.exports = {
  devtool: "eval", // use cheap-eval-source-map for slower builds but better debugging

  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client?reload=true",
    ...config.entry,
  ],

  resolve: config.resolve,

  output: config.output,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    ...config.plugins,
  ],

  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: "react-hot-loader/webpack" },
      { test: /\.css$/, use: ["style-loader", `css-loader?${CSS_LOADER_OPTIONS}`, "postcss-loader"] },
      ...config.module.rules,
    ],
  },
};
