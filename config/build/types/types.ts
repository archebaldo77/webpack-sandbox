export interface BuildPaths {
  src: string;
  dist: string;
  html: string;
}

export type BuildMode = `development` | `production`;

export interface BuildOptions {
  paths?: BuildPaths;
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  analyzer?: boolean;
}
