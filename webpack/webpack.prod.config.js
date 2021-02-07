const TerserPlugin = require("terser-webpack-plugin");
const config = require("./webpack.config");

module.exports = {
  ...config,

  mode: "production",

  devtool: "source-map",

  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false, // do not extract comments to the *.LICENSE.txt file
      }),
    ],
  },
};
