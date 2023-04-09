const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
/** @type {import('next').NextConfig} */

const nextConfiguration = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    formats: ['image/webp'],
    loader: 'default',
    disableStaticImages: true
  },
  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
