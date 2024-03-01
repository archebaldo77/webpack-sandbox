import ReactRefreshTypeScript from 'react-refresh-typescript';

export const buildTypescriptLoader = (isDev: boolean) => {
  return {
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
};
