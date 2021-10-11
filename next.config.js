// eslint-disable-next-line @typescript-eslint/no-var-requires
const WindiCSS = require('windicss-webpack-plugin').default;

module.exports = {
  experimental: { esmExternals: true },
  webpack(config) {
    config.plugins.push(new WindiCSS());
    return config;
  },
  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate',
          },
          {
            key: 'Content-Type',
            value: 'application/json; charset=utf-8',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Accept, Accept-Language, Content-Language, Content-Type',
          },
        ],
      },
      {
        source: '/api/graphql',
        headers: [
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST',
          },
        ],
      },
      {
        source: '/api/version',
        headers: [
          {
            key: 'Cache-Control',
            value: 'cache-control: public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/',
      },
    ];
  },
};
