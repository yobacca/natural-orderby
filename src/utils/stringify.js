// @flow
import { RE_LEADING_OR_TRAILING_WHITESPACES } from './regex';
import type { CaseSensitive } from '../types';

const stringify = (
  value: string | number | boolean | Boolean | Number | String | Date | any,
  caseSensitive: CaseSensitive
): string => {
  if (typeof value === 'boolean' || value instanceof Boolean) {
    return Number(value).toString();
  }
  if (typeof value === 'number' || value instanceof Number) {
    return value.toString();
  }
  if (value instanceof Date) {
    return value.getTime().toString();
  }
  if (typeof value === 'string' || value instanceof String) {
    return (caseSensitive ? value : value.toLowerCase()).replace(
      RE_LEADING_OR_TRAILING_WHITESPACES,
      ''
    );
  }
  return '';
};

export default stringify;
