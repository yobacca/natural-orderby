import type { ParsedNumber } from '../types';

export const parseNumber = (value: string): ParsedNumber | void => {
  if (value.length !== 0) {
    const parsedNumber = Number(value.replace(/_/g, ''));
    if (!Number.isNaN(parsedNumber)) {
      return parsedNumber;
    }
  }
  return undefined;
};
