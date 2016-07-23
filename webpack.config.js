const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const rootPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

module.exports = {
  entry: path.join(rootPath, 'main.js'),
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/build'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(rootPath, 'index.html'),
        to: path.join(buildPath, 'index.html')
      }
    ])
  ]
};
