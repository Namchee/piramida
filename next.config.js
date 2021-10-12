// eslint-disable-next-line @typescript-eslint/no-var-requires
const WindiCSS = require('windicss-webpack-plugin').default;

module.exports = {
  experimental: { esmExternals: true },
  eslint: {
    // linebreak sucks
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.plugins.push(new WindiCSS());
    return config;
  },
  i18n: {
    locales: ['id-ID'],
    defaultLocale: 'id-ID',
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
