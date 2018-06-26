// @flow
const isObject = (value: mixed): boolean =>
  value !== null &&
  typeof value === 'object' &&
  !Array.isArray(value) &&
  !(value instanceof Number) &&
  !(value instanceof String) &&
  !(value instanceof Boolean) &&
  !(value instanceof Date);

export default isObject;
