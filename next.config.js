const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // 개발 모드에서만 fork-ts-checker-webpack-plugin 추가
    if (options.dev) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    return config;
  },
};

module.exports = nextConfig;
