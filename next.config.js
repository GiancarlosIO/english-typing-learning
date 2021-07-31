/* eslint-disable @typescript-eslint/no-var-requires */

const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.plugins.push(new TsConfigPathsPlugin());
    return config;
  },
};
