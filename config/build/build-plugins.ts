import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProgressPlugin } from 'webpack';

import { type Configuration } from 'webpack';
import { type BuildOptions } from './types/types';

export const buildPlugins = (
  options: BuildOptions
): Configuration[`plugins`] => {
  const { paths, mode } = options;

  const isDev = mode === `development`;
  const isProd = mode === `production`;

  const plugins: Configuration[`plugins`] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];

  if (isDev) {
    plugins.push(new ProgressPlugin());
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: `css/[name].[contenthash:8].css`,
        chunkFilename: `css/[name].[contenthash:8].css`,
      })
    );
  }

  return plugins;
};
