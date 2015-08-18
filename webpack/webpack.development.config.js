var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');

module.exports = {
  debug: true,
  devtool: 'sourcemap',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/client/main.jsx'
  ],
  output: {
    path: path.join(__dirname, '../dev'),
    filename: 'dev.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$|\.js$/,
      loaders: ['react-hot', 'babel?stage=0&optional[]=runtime'],
      include: path.join(__dirname, '../src')
    }, {
      test: /\.styl$/,
      loader: 'style!css!postcss!stylus'
    }]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
