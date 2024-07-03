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
        hostname: 'cms.awaken.finance',
      },
      {
        protocol: 'https',
        hostname: 'test-cms.awaken.finance',
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
