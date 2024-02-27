import path from 'path';
import webpack, { type Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type Mode = `development` | `production`;

interface EnvVariables {
  mode: Mode;
}

export default (env: EnvVariables): Configuration => {
  const { mode } = env;

  return {
    mode: mode ?? `development`,
    entry: path.resolve(__dirname, `src`, `index.ts`),
    output: {
      filename: `[name].[contenthash:8].js`,
      path: path.resolve(__dirname, `dist`),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, `public`, `index.html`),
      }),
      new webpack.ProgressPlugin(),
    ],
    module: {
      rules: [
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
  };
};
