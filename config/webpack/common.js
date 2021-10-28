const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const paths = require('../paths');

module.exports = {
  entry: `${paths.src}/index.tsx`,
  output: {
    path: paths.build,
    filename: 'js/[name].bundle.js',
    publicPath: '/',
    clean: true,
    crossOriginLoading: 'anonymous',
    module: true,
    environment: {
      arrowFunction: true,
      bigIntLiteral: false,
      const: true,
      destructuring: true,
      dynamicImport: false,
      forOf: true,
    },
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  experiments: {
    topLevelAwait: true,
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: `${paths.public}/index.html`,
      filename: 'index.html',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new CheckerPlugin(),
  ],
};
