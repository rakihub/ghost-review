import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import { resolve } from 'path';
import livereload from 'rollup-plugin-livereload';
import fg from 'fast-glob';

const jsFiles = fg.sync('assets/js/**/*.js');

export default defineConfig({
  input: jsFiles,
  output: {
    dir: 'assets/built',
    sourcemap: false,
    format: 'commonjs',
    preserveModules: false,
    plugins: [terser()],
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    babel({ babelHelpers: 'bundled' }),
    postcss({
      extract: true, // Extract the CSS into a separate file
      sourceMap: false,
      plugins: [postcssPresetEnv({})],
      minimize: true,
    }),
    process.env.BUILD !== 'production' &&
    livereload({
      watch: resolve('.'),
      extraExts: ['hbs'],
      exclusions: [resolve('node_modules')],
    }),
  ],
});
