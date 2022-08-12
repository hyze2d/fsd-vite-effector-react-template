import path from 'path';
import svgr from 'vite-plugin-svgr';
import { fileURLToPath } from 'url';
import checker from 'vite-plugin-checker'
import { babel } from '@rollup/plugin-babel';
import tsconfigPaths from 'vite-tsconfig-paths';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default {
    css: {
      modules: {
        localsConvention: 'camelCase'
      }
    },
  
    resolve: {
      alias: {
        "@shared": path.resolve(__dirname, 'src/shared'), 

        // '@img': path.resolve(__dirname, 'src/shared/ui/assets/images'),
  
        // '@icon': path.resolve(__dirname, 'src/shared/ui/assets/icons'),
  
        // '@styles':  path.resolve(__dirname, 'src/shared/ui/styles')
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
  }