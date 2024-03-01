import path from 'path';

import { buildWebpack } from './config/build/build-webpack';

import { type Configuration } from 'webpack';
import { type BuildEnv } from './config/build/types/types';

const paths = {
  src: path.resolve(__dirname, `src`),
  public: path.resolve(__dirname, `public`),
  entry: path.resolve(__dirname, `src`, `index.tsx`),
  dist: path.resolve(__dirname, `dist`),
  html: path.resolve(__dirname, `public`, `index.html`),
};

export default (env: BuildEnv): Configuration => {
  const { mode = `development`, port = 3000, analyzer = false } = env;

  return buildWebpack({ paths, mode, port, analyzer });
};
