/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import merge from 'webpack-merge';
import webpack from 'webpack';
import { getCommonConfig } from './webpack.config.common';

const getDevConfig = (): any => ({
  mode: 'development',
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, '../../dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/chunk_[id].js',
    publicPath: '/',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    compress: true,
    static: {
      directory: path.join(__dirname, '../../'),
    },
  },
});

export default (): webpack.Configuration => (
  merge(getCommonConfig(), getDevConfig()));
