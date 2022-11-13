export const isObject = (value: unknown): boolean =>
  value !== null &&
  typeof value === 'object' &&
  !Array.isArray(value) &&
  !(value instanceof Number) &&
  !(value instanceof String) &&
  !(value instanceof Boolean) &&
  !(value instanceof Date);
