var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config           = require('../webpack/webpack.dev.config');

var webpackDevServer = new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  headers: { "Access-Control-Allow-Origin": "*" },
});

webpackDevServer.listen(9090,'localhost', function (err) {
  if (err) throw err;
});
