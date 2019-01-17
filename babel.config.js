/* eslint-disable flowtype/require-valid-file-annotation */
const presets = [['@babel/preset-env', { loose: true }]];
const plugins = [
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-transform-flow-strip-types',
];

module.exports = {
  presets,
  plugins,
};
