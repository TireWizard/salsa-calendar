var path = require('path');
var webpack = require('webpack');
var pkg = require('../package.json');

module.exports = {
  entry: [
    './src/views/Calendar.jsx'
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: pkg.name + '.min.js',
    library: 'Calendar',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
      test: /\.jsx$|\.js$/,
      loaders: ['babel?stage=0&optional[]=runtime'],
      include: path.join(__dirname, '../src')
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
