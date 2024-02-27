const path = require('path');
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const webpack = require(`webpack`);

module.exports = (env) => {
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
