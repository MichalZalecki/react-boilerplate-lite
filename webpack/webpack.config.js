require("dotenv").config({ silent: true });

const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

function localIdentName() {
  if (process.env.NODE_ENV === "production") return "[hash:base64]";
  return "[path][name]__[local]";
}

module.exports = {
  entry: {
    app: [path.resolve("src/index.jsx")],
  },

  output: {
    path: path.resolve("build"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { cacheDirectory: process.env.NODE_ENV === "development" },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                localIdentName: localIdentName(),
              },
            },
          },
        ],
      },
    ],
  },
};
