/* eslint-disable node/no-missing-require */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./umd/natural-orderby.production.min.js');
} else {
  module.exports = require('./umd/natural-orderby.development.js');
}
