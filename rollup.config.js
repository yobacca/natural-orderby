/* eslint-disable flowtype/require-valid-file-annotation */
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

import pkg from './package.json';

const input = 'src/index.js';
const globalName = 'naturalOrderBy';

const iife = [
  {
    input,
    output: {
      file: `iife/${pkg.name}.js`,
      format: 'iife',
      name: globalName,
    },
    plugins: [
      nodeResolve(),
      babel(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  },
  {
    input,
    output: {
      file: `iife/${pkg.name}.min.js`,
      format: 'iife',
      name: globalName,
    },
    plugins: [
      nodeResolve(),
      babel(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      sizeSnapshot(),
      uglify(),
    ],
  },
];

const cjs = [
  {
    input,
    output: {
      file: `cjs/${pkg.name}.js`,
      format: 'cjs',
    },
    plugins: [
      nodeResolve(),
      babel(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  },
];

const esm = [
  {
    input,
    output: { file: `esm/${pkg.name}.js`, format: 'esm' },
    plugins: [
      nodeResolve(),
      babel({
        runtimeHelpers: true,
        plugins: [['@babel/transform-runtime', { useESModules: true }]],
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  },
];

export default [...iife, ...cjs, ...esm];
