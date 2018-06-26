// @flow
const isNaN = (value: mixed): boolean =>
  Number.isNaN(value) ||
  (value instanceof Number && Number.isNaN(value.valueOf()));

export default isNaN;
