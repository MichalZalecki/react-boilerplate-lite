const config = require("./webpack.config");

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
    ],
  },
};
