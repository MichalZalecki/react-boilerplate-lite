if (process.env.NODE_ENV === "production") {
  module.exports = {
    devMiddleware: {},
    hotMiddleware: {},
  };
} else {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const DashboardPlugin = require("webpack-dashboard/plugin");

  const config = require("../../webpack/webpack.dev.config");

  const compiler = webpack(config);

  compiler.apply(new DashboardPlugin());

  const devMiddleware = webpackDevMiddleware(compiler, {
    contentBase: "build",
    stats: { colors: true },
  });

  const hotMiddleware = webpackHotMiddleware(compiler);

  module.exports = {
    devMiddleware,
    hotMiddleware,
  };
}
