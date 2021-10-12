/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { getCommonConfig } from './webpack.config.common';

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const getProdConfig = (): webpack.Configuration => ({
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/chunk_[id].js',
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.ejs'),
      title: 'test',
      inject: false,
    }),
  ],
});

export default (): webpack.Configuration => (
  merge(getCommonConfig(), getProdConfig()));
