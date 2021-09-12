const { theme } = require('tailwindcss/defaultConfig');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Atkinson Hyperlegible', ...theme.fontFamily.sans],
    },
    extend: {
      colors: {
        'primary': '#185ADB',
        'primary-light': '#326FE8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
