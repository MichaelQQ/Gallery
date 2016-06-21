const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  resolve: {
    root: __dirname + '/src'
  },
  entry: [
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'main.js',
    // publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src'),
      query: {
        presets: ['es2015', 'stage-0', 'react']
      }
    }]
  }
};
