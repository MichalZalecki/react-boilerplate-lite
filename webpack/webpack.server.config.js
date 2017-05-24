const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = require("./webpack.config");

const extractText = (fallback, use) =>
  ExtractTextPlugin.extract({ fallback, use });

const CSS_LOADER_OPTIONS = "sourceMaps&minimize";

module.exports = {
  devtool: "eval",

  entry: {
    app: path.resolve("src/common/App/App"),
    rootReducer: path.resolve("src/common/rootReducer"),
  },

  resolve: config.resolve,

  output: Object.assign({}, config.output, {
    filename: "[name].server.js",
    libraryTarget: "commonjs",
  }),

  externals: ["react-helmet"],

  plugins: [
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
