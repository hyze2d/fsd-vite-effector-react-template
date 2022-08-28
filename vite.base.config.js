import path from 'path';
import svgr from 'vite-plugin-svgr';
import { fileURLToPath } from 'url';
import checker from 'vite-plugin-checker';
import { babel } from '@rollup/plugin-babel';
import tsconfigPaths from 'vite-tsconfig-paths';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default {
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      all: true,
      reporter: ['lcov'],
    }
  },

  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  plugins: [
    babel({
      extensions: ['.ts'],

      babelHelpers: 'bundled'
    }),

    svgr(),

    tsconfigPaths(),

    checker({ typescript: true })
  ]
};
