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

  // compiler.apply(new webpack.ProgressPlugin());
  // compiler.apply(new DashboardPlugin());

  console.log(Object.keys(compiler));

  const devMiddleware = webpackDevMiddleware(compiler);

  // TODO: Errors overlay doesn't work yet with webpack 5
  //       https://github.com/webpack-contrib/webpack-hot-middleware/pull/397
  const hotMiddleware = webpackHotMiddleware(compiler);

  module.exports = {
    devMiddleware,
    hotMiddleware,
  };
}
