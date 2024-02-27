import path from 'path';
import webpack, { type Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

type Mode = `development` | `production`;

interface EnvVariables {
  mode: Mode;
  port: number;
}

type WebpackConfigurationType = Configuration & DevServerConfiguration;

export default (env: EnvVariables): WebpackConfigurationType => {
  const { mode, port } = env;

  const isDev = mode == `development`;
  const isProd = mode == `production`;

  return {
    mode: mode ?? `development`,
    entry: path.resolve(__dirname, `src`, `index.tsx`),
    output: {
      filename: `[name].[contenthash:8].js`,
      path: path.resolve(__dirname, `dist`),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, `public`, `index.html`),
      }),
      isProd &&
        new MiniCssExtractPlugin({
          filename: `css/[name].[contenthash:8].css`,
          chunkFilename: `css/[name].[contenthash:8].css`,
        }),
      isDev && new webpack.ProgressPlugin(),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            isDev ? `style-loader` : MiniCssExtractPlugin.loader,
            `css-loader`,
            `sass-loader`,
          ],
        },
        {
          test: /\.tsx?$/,
          use: `ts-loader`,
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [`.tsx`, `.ts`, `.js`, `.json`],
    },
    devtool: isDev && `inline-source-map`,
    devServer: isDev
      ? {
          port: port ?? 3000,
          open: true,
        }
      : undefined,
  };
};
