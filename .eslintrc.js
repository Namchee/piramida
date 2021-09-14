module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'google',
  ],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'object-curly-spacing': ['error', 'always'],
  },
};
