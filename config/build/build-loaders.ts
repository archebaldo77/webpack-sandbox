import { buildSCCSLoader } from './loaders/build-scss-loader';
import { buildBabelLoader } from './loaders/build-babel-loader';
import { buildAssetsLoader } from './loaders/build-assets-loader';
import { buildSVGLoader } from './loaders/build-svg-loader';

import { type ModuleOptions } from 'webpack';
import { type BuildOptions } from './types/types';

export const buildLoaders = (options: BuildOptions): ModuleOptions[`rules`] => {
  const { mode } = options;

  const isDev = mode === `development`;

  return [
    buildAssetsLoader(),
    buildSVGLoader(),
    buildSCCSLoader(isDev),
    buildBabelLoader(),
  ];
};
