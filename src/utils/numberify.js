// @flow
import parseNumber from './parseNumber';
import parseDate from './parseDate';
import type { ParsedNumber } from '../types';

const numberify = (value: string): ParsedNumber | void => {
  const parsedNumber = parseNumber(value);
  if (parsedNumber !== undefined) {
    return parsedNumber;
  }
  return parseDate(value);
};

export default numberify;
