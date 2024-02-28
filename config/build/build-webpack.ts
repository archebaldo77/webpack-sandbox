import { buildPlugins } from './build-plugins';
import { buildLoaders } from './build-loaders';
import { buildResolvers } from './build-resolvers';
import { buildDevServer } from './build-dev-server';

import { type Configuration } from 'webpack';
import { type BuildOptions } from './types/types';

export const buildWebpack = (options: BuildOptions): Configuration => {
  const { paths, mode } = options;

  const isDev = mode === `development`;

  return {
    mode: mode,
    entry: paths.src,
    output: {
      filename: `[name].[contenthash:8].js`,
      path: paths.dist,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDev && `inline-source-map`,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
