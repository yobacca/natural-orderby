/* eslint-disable flowtype/require-valid-file-annotation */
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';
import sourceMaps from 'rollup-plugin-sourcemaps';

const commonPlugins = [
  nodeResolve(),
  sourceMaps(),
  babel({
    plugins: ['external-helpers'],
  }),
];

const configBase = {
  input: 'src/index.js',
  plugins: commonPlugins,
};

const iifeBaseConfig = Object.assign({}, configBase, {
  output: {
    file: 'dist/natural-orderby.js',
    format: 'iife',
    name: 'naturalOrderBy',
    exports: 'named',
    sourcemap: true,
  },
});

const iifeConfig = Object.assign({}, iifeBaseConfig, {
  plugins: iifeBaseConfig.plugins.concat(
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    })
  ),
});

const iifeProdConfig = Object.assign({}, iifeBaseConfig, {
  output: Object.assign({}, iifeBaseConfig.output, {
    file: 'dist/natural-orderby.min.js',
  }),
  plugins: iifeBaseConfig.plugins.concat([
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    uglify({
      sourceMap: true,
    }),
  ]),
});

const esmConfig = Object.assign({}, configBase, {
  output: { file: 'dist/natural-orderby.es.js', format: 'es', sourcemap: true },
});

const esmProdConfig = Object.assign({}, configBase, esmConfig, {
  output: {
    file: 'dist/natural-orderby.es.min.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: esmConfig.plugins.concat(
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    terser({
      sourceMap: true,
    })
  ),
});

export default [iifeConfig, iifeProdConfig, esmConfig, esmProdConfig];
