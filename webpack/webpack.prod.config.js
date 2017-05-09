const webpack = require("webpack");
const config = require("./webpack.config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractText = (fallback, use) =>
  ExtractTextPlugin.extract({ fallback, use });

const CSS_LOADER_OPTIONS = "sourceMaps&minimize";

module.exports = {
  devtool: "source-map",

  entry: config.entry,

  resolve: config.resolve,

  output: config.output,

  plugins: [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true, minimize: true, comments: false }),
    new ExtractTextPlugin({ filename: "styles.[hash].css", allChunks: true }),
    ...config.plugins,
  ],

  module: {
    rules: [
      { test: /\.css$/, use: extractText("style-loader", `css-loader?${CSS_LOADER_OPTIONS}!postcss-loader`) },
      ...config.module.rules,
    ],
  },
};
