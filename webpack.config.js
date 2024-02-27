const path = require('path');
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = (env) => {
  const { mode } = env;

  return {
    mode: mode ?? `development`,
    entry: path.resolve(__dirname, `src`, `index.js`),
    output: {
      filename: `[name].[contenthash:8].js`,
      path: path.resolve(__dirname, `dist`),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, `public`, `index.html`),
      }),
    ],
  };
};
