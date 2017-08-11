const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const config = require("./webpack.config");

const extractText = (fallback, use) =>
  ExtractTextPlugin.extract({ fallback, use });

const CSS_LOADER_OPTIONS = "sourceMaps&minimize&localIdentName=[name]--[hash:base64:5]";

module.exports = {
  devtool: "source-map",

  entry: config.entry,

  resolve: config.resolve,

  output: config.output,

  plugins: [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true, output: { comments: false } }),
    new ExtractTextPlugin({ filename: "styles.[hash].css", allChunks: true }),
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
      minify: { collapseWhitespace: true },
    }),
    ...config.plugins,
  ],

  module: {
    rules: [
      { test: /\.css$/, use: extractText("style-loader", `css-loader?${CSS_LOADER_OPTIONS}!postcss-loader`) },
      ...config.module.rules,
    ],
  },
};
