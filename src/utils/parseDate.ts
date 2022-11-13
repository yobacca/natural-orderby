import type { ParsedNumber } from '../types';
import { RE_DATE } from './regex';

export const parseDate = (value: string): ParsedNumber | undefined => {
  if (RE_DATE.test(value)) {
    const parsedDate = Date.parse(value);
    if (!Number.isNaN(parsedDate)) {
      return parsedDate;
    }
  }
  return undefined;
};
