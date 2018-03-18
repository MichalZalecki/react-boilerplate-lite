const config = require("./webpack.config");

const CSS_LOADER_OPTIONS = "sourceMaps&minimize&localIdentName=[name]--[hash:base64:5]";

module.exports = {
  mode: "production",

  devtool: "source-map",

  entry: config.entry,

  resolve: config.resolve,

  output: config.output,

  optimization: {
    minimize: true,
  },

  plugins: config.plugins,

  module: {
    rules: [
      ...config.module.rules,
      { test: /\.css$/, loader: ["style-loader", `css-loader?${CSS_LOADER_OPTIONS}`, "postcss-loader"] },
    ],
  },
};
