import { RE_DATE } from './regex';
import type { ParsedNumber } from '../types';

export const parseDate = (value: string): ParsedNumber | undefined => {
  try {
    const parsedDate = Date.parse(value);

    if (!Number.isNaN(parsedDate)) {
      if (RE_DATE.test(value)) {
        return parsedDate;
      }
    }

    return undefined;
  } catch {
    return undefined;
  }
};
