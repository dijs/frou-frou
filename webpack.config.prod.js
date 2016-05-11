var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '/static/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      include: path.join(__dirname, 'src'),
      loaders: ['babel']
    }]
  }
};
