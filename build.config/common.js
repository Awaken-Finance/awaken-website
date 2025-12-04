const rewritesConfig = require('./rewrites/index');
const path = require('path');

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return rewritesConfig;
  },
  images: {
    // loader: 'akamai',
    // path: '',
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'awaken.finance',
      },
      {
        protocol: 'https',
        hostname: 'cms-v2.awaken.finance',
      },
      {
        protocol: 'https',
        hostname: 'awaken-cms-mainnet.s3.ap-northeast-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'test-cms-v2.awaken.finance',
      },
      {
        protocol: 'https',
        hostname: 'awaken-cms-testnet.s3.ap-northeast-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'home.awaken.finance',
      },
      {
        protocol: 'https',
        hostname: 'test-home.awaken.finance',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  productionBrowserSourceMaps: true,
};
