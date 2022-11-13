import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import * as path from 'path';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';

import pkg from './package.json';

const ROOT_DIR = '.';
const SOURCE_DIR = path.join(ROOT_DIR, 'src');
const OUTPUT_DIR = path.join(ROOT_DIR, 'dist');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createBanner = (packageName, version) => `/**
 * ${packageName} v${version}
 *
 * Copyright (c) Olaf Ennen
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */`;

// JS modules for bundlers
const modules = [
  {
    input: path.join(SOURCE_DIR, 'index.ts'),
    output: {
      file: path.join(OUTPUT_DIR, 'index.js'),
      format: 'esm',
      banner: createBanner('natural-orderby', pkg.version),
    },
    plugins: [
      nodeResolve({ extensions: ['.ts'] }),
      babel({
        babelHelpers: 'bundled',
        exclude: /node_modules/,
        presets: [
          ['@babel/preset-env', { loose: true }],
          '@babel/preset-typescript',
        ],
        extensions: ['.ts'],
      }),
    ],
  },
];

// JS modules for <script type=module>
const webModules = [
  {
    input: path.join(SOURCE_DIR, 'index.ts'),
    output: {
      file: path.join(OUTPUT_DIR, 'natural-orderby.development.js'),
      format: 'esm',
      banner: createBanner('natural-orderby', pkg.version),
    },
    plugins: [
      nodeResolve({ extensions: ['.ts'] }),
      babel({
        babelHelpers: 'bundled',
        exclude: /node_modules/,
        presets: ['@babel/preset-modules', '@babel/preset-typescript'],
        extensions: ['.ts'],
      }),
    ],
  },
  {
    input: path.join(SOURCE_DIR, 'index.ts'),
    output: {
      file: path.join(OUTPUT_DIR, 'natural-orderby.production.min.js'),
      format: 'esm',
      banner: createBanner('natural-orderby', pkg.version),
    },
    plugins: [
      nodeResolve({ extensions: ['.ts'] }),
      babel({
        babelHelpers: 'bundled',
        exclude: /node_modules/,
        presets: [
          [
            '@babel/preset-modules',
            {
              // Don't spoof `.name` for Arrow Functions, which breaks when minified anyway.
              loose: true,
            },
          ],
          '@babel/preset-typescript',
        ],
        extensions: ['.ts'],
      }),
      terser({ ecma: 2017, safari10: true }),
    ],
  },
];

// UMD modules for <script> tags and CommonJS (node)
const globals = [
  {
    input: path.join(SOURCE_DIR, 'index.ts'),
    output: {
      file: path.join(OUTPUT_DIR, 'umd', 'natural-orderby.development.js'),
      format: 'umd',
      banner: createBanner('natural-orderby', pkg.version),
      name: 'naturalOrderBy',
    },
    plugins: [
      nodeResolve({ extensions: ['.ts'] }),
      babel({
        babelHelpers: 'bundled',
        exclude: /node_modules/,
        presets: [
          ['@babel/preset-env', { loose: true }],
          '@babel/preset-typescript',
        ],
        extensions: ['.ts'],
      }),
    ],
  },
  {
    input: path.join(SOURCE_DIR, 'index.ts'),
    output: {
      file: path.join(OUTPUT_DIR, 'umd', 'natural-orderby.production.min.js'),
      format: 'umd',
      banner: createBanner('natural-orderby', pkg.version),
      name: 'naturalOrderBy',
    },
    plugins: [
      nodeResolve({ extensions: ['.ts'] }),
      babel({
        babelHelpers: 'bundled',
        exclude: /node_modules/,
        presets: [
          ['@babel/preset-env', { loose: true }],
          '@babel/preset-typescript',
        ],
        extensions: ['.ts'],
      }),
      terser(),
    ],
  },
];

// Node entry points
const node = [
  {
    input: path.join(SOURCE_DIR, 'node-main.js'),
    output: {
      file: path.join(OUTPUT_DIR, 'main.js'),
      format: 'cjs',
      banner: createBanner('natural-orderby', pkg.version),
    },
  },
];

// TypeScript declaration files
const tsdf = [
  {
    input: path.join(OUTPUT_DIR, 'types', 'index.d.ts'),
    output: [{ file: path.join(OUTPUT_DIR, 'index.d.ts'), format: 'es' }],
    plugins: [
      dts(),
      del({
        targets: path.join(OUTPUT_DIR, 'types'),
        hook: 'buildEnd',
      }),
    ],
  },
];

export default [...modules, ...webModules, ...globals, ...node, ...tsdf];
