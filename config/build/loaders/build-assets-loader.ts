export const buildAssetsLoader = () => {
  return {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: `asset/resource`,
  };
};
