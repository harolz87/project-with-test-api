/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
import webpack from 'webpack';

export const getCommonConfig = (): webpack.Configuration => ({
  entry: {
    index: [path.resolve(__dirname, '../../src/index.tsx')],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(woff|eot|ttf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            fallback: 'file-loader',
            name: 'fonts/[name].[hash].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});
