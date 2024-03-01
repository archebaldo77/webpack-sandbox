import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { buildCSSModulesLoader } from './build-css-modules-loader';

export const buildSCCSLoader = (isDev: boolean) => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? `style-loader` : MiniCssExtractPlugin.loader,
      buildCSSModulesLoader(isDev),
      `sass-loader`,
    ],
  };
};
