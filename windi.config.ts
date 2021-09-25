import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  safelist: 'bg-red-100 hover:bg-red-200 mt-2 mt-4',
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
  variants: {
    scrollbar: ['rounded'],
  },
  plugins: [
    require('windicss/plugin/forms'),
    require('@windicss/plugin-scrollbar'),
  ],
});
