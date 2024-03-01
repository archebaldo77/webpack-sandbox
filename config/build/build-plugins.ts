import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { DefinePlugin, ProgressPlugin } from 'webpack';

import { type Configuration } from 'webpack';
import { type BuildOptions } from './types/types';

export const buildPlugins = (
  options: BuildOptions
): Configuration[`plugins`] => {
  const { paths, mode, analyzer } = options;

  const isDev = mode === `development`;
  const isProd = mode === `production`;

  const plugins: Configuration[`plugins`] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, `favicon.ico`),
    }),
    new DefinePlugin({
      __IS_DEV__: mode === `development`,
    }),
  ];

  if (isDev) {
    plugins.push(
      new ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new ReactRefreshWebpackPlugin()
    );
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: `css/[name].[contenthash:8].css`,
        chunkFilename: `css/[name].[contenthash:8].css`,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(paths.public, `locales`),
            to: path.resolve(paths.dist, `locales`),
          },
          {
            from: path.resolve(paths.src, `assets`),
            to: path.resolve(paths.dist, `assets`),
          },
        ],
      })
    );

    if (analyzer) {
      plugins.push(new BundleAnalyzerPlugin());
    }
  }

  return plugins;
};
