import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

import { type ModuleOptions } from 'webpack';
import { type BuildOptions } from './types/types';

export const buildLoaders = (options: BuildOptions): ModuleOptions[`rules`] => {
  const { mode } = options;

  const isDev = mode === `development`;

  const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: `asset/resource`,
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{ loader: `@svgr/webpack`, options: { icon: true } }],
  };

  const cssModulesLoader = {
    loader: `css-loader`,
    options: {
      modules: {
        localIdentName: isDev ? `[path][name]__[local]` : `[hash:base64:8]`,
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? `style-loader` : MiniCssExtractPlugin.loader,
      cssModulesLoader,
      `sass-loader`,
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: `ts-loader`,
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  };

  return [assetsLoader, svgLoader, scssLoader, tsLoader];
};
