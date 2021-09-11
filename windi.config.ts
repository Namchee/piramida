import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
});
