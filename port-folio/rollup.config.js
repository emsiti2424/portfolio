// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import litcss from 'rollup-plugin-lit-css';
import sass from 'rollup-plugin-sass';
import image from '@rollup/plugin-image';

export default {
  input: 'src/port-folio.js',
  output: {
    dir: 'dist',
    format: 'es',
  },
  external: ['swiper/element/bundle'],
  plugins: [
    resolve(),
    sass({
      // Instead of inserting styles into the head, we'll include them as strings,
      // which you can then use in your components. We don't need the 'insert' option.
      processor: css => css.toString(),
      // Include option can also be used to tell Rollup explicitly to parse
      // the import requests against the files/directories that match the provided patterns.
      // include: '**/*.scss',
    }),
    litcss(),
    terser(),
    image(),
  ],
};
