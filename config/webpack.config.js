const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appEnv = process.env.NODE_ENV;
const rootPath = path.resolve(__dirname, '..', 'src');
const buildPath = path.resolve(__dirname, '..', 'dist');


module.exports = {
  entry: path.join(rootPath, 'app.js'),
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: appEnv === 'dev' ? 'http://localhost:8080/dev' : '.'
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
    new HtmlWebpackPlugin({
      title: 'Genetic Algorithm Art',
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
};
