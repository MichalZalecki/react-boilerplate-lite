const config = require("./webpack.config");

module.exports = {
  ...config,

  mode: "development",

  devtool: "eval-cheap-module-source-map", // use "eval" for faster builds and inferior debugging

  devServer: {
    hot: true,
    overlay: true,
  },

  module: {
    rules: [
      ...config.module.rules,
      {
        test: /\.jsx?$/,
        include: /node_modules/,
        use: ["react-hot-loader/webpack"],
      },
    ],
  },
};
