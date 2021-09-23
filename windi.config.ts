import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    fontFamily: {
      sans: ['Atkinson Hyperlegible', 'Segoe UI', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#185ADB',
        'primary-light': '#437BEA',
        'primary-dark': '#154DBD',
      },
    },
  },
  plugins: [
    require('windicss/plugin/forms'),
  ],
});
