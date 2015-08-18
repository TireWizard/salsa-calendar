var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
    }, {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css?minimize!postcss!stylus')
    }]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin(pkg.name + '.min.css')
  ]
};
