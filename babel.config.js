/* eslint-disable flowtype/require-valid-file-annotation */
const { NODE_ENV } = process.env;
const modules = NODE_ENV === 'cjs' || NODE_ENV === 'test' ? 'commonjs' : false;
const loose = true;

const presets = [['@babel/preset-env', { loose, modules }]];
const plugins = [
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-transform-flow-strip-types',
];

module.exports = {
  presets,
  plugins,
};
