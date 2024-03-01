export const buildSVGLoader = () => {
  return {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{ loader: `@svgr/webpack`, options: { icon: true } }],
  };
};
