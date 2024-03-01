export const buildCSSModulesLoader = (isDev: boolean) => {
  return {
    loader: `css-loader`,
    options: {
      modules: {
        localIdentName: isDev ? `[path][name]__[local]` : `[hash:base64:8]`,
      },
    },
  };
};
