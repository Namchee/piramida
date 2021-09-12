module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
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
