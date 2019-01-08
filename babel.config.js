/* eslint-disable flowtype/require-valid-file-annotation */
module.exports = {
  presets: [['@babel/preset-env', { loose: true, modules: false }]],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-flow-strip-types',
  ],
  env: {
    cjs: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
