// eslint-disable-next-line @typescript-eslint/no-var-requires
const WindiCSS = require('windicss-webpack-plugin').default;

module.exports = {
  experimental: { esmExternals: true },
  webpack(config) {
    config.plugins.push(new WindiCSS());
    return config;
  },
  i18n: {
    locales: ['id-ID'],
    defaultLocale: 'id-ID',
  },
  async rewrites() {
    const isDev = process.env.NODE_ENV === 'development';

    return [
      {
        source: '/home',
        destination: '/',
      },
      {
        source: '/api/:path*',
        destination: isDev ?
          `http://localhost:3001/api/:path*` :
          `https://ojk-invest-api.vercel.app/api/:path*`,
      },
    ];
  },
  async redirects() {
    const isDev = process.env.NODE_ENV === 'development';

    return [
      {
        source: '/home',
        destination: '/',
        permanent: false,
      },
      {
        source: '/api/:path*',
        destination: isDev ?
          `http://localhost:3001/api/:path*` :
          `https://ojk-invest-api.vercel.app/api/:path*`,
        permanent: false,
      },
    ];
  },
};
