const HtmlWebpackPlugin = require('html-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const path = require('path');
const webpack = require("webpack");

const options = {}

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    vendor: './src/entry.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: './src/index.html',
      title: 'Development',
    }),
    new WebpackManifestPlugin(options),
    new webpack.HotModuleReplacementPlugin(),
  ],
};