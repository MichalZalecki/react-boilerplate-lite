const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("../webpack/webpack.dev.config");

const PORT = process.env.PORT || 8080;

const webpackDevServer = new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
});

webpackDevServer.listen(PORT, "localhost", err => {
  if (err) throw err;
  console.log("webpack-dev-server started at http://localhost:%d", PORT);
});
