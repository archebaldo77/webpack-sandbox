const path = require('path');

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
  };
};
