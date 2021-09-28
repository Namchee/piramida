// eslint-disable-next-line @typescript-eslint/no-var-requires
const WindiCSS = require('windicss-webpack-plugin').default;

module.exports = {
  webpack(config) {
    config.plugins.push(new WindiCSS());
    return config;
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
        destination: `${isDev ? 'http://localhost:3000/api' : '/api'}/:path*`,
        basePath: false,
      },
    ];
  },
  async redirects() {
    console.log('redicrs');
    const isDev = process.env.NODE_ENV === 'development';

    return [
      {
        source: '/api/:path*',
        destination: `${isDev ? 'http://localhost:3000/api' : '/api'}/:path*`,
        permanent: true,
      },
    ];
  },
};
