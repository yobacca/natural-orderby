import type { ParsedNumber } from '../types';
import { parseDate } from './parseDate';
import { parseNumber } from './parseNumber';

export const numberify = (value: string): ParsedNumber | undefined => {
  const parsedNumber = parseNumber(value);
  if (parsedNumber !== undefined) {
    return parsedNumber;
  }
  return parseDate(value);
};
