var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('../webpack/webpack.development.config');

new webpackDevServer(webpack(config), {
  contentBase: './dev',
  hot: true,
  historyApiFallback: true
}).listen(3000);
