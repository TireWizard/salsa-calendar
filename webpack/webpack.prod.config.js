var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pkg = require('../package.json');

module.exports = {
  entry: {
    js: './src/client/views/Calendar.jsx',
    css: './src/styles/salsa-calendar.styl'
  },
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: pkg.name + '.min.[name]',
    library: 'SalsaCalendar',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.jsx$|\.js$/,
      loaders: ['babel?stage=0&optional[]=runtime'],
      exclude: /node_modules/
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
