import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { type ModuleOptions } from 'webpack';
import { type BuildOptions } from './types/types';

export const buildLoaders = (options: BuildOptions): ModuleOptions[`rules`] => {
  const { mode } = options;

  const isDev = mode === `development`;

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? `style-loader` : MiniCssExtractPlugin.loader,
      `css-loader`,
      `sass-loader`,
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: `ts-loader`,
    exclude: /node_modules/,
  };

  return [scssLoader, tsLoader];
};
