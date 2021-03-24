module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'linebreak-style': [
      'warn',
      'windows',
    ],
    'max-len': 'off',
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'require-jsdoc': 'off',
  },
};
