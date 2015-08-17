var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var pkg = require('../package.json');

module.exports = {
  entry: {
    js: './src/views/Calendar.jsx',
    css: './src/styles/salsa-calendar.styl'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: pkg.name + '.min.[name]',
    library: 'Calendar',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
      test: /\.jsx$|\.js$/,
      loaders: ['babel?stage=0&optional[]=runtime'],
      include: path.join(__dirname, '../src')
    },{
      test: /\.styl$/,
      loader: 'style!css!postcss!stylus'
    },{
      test: /\.svg$/,
      loader: 'svg-loader'
    }]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
