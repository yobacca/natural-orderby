// @flow
import type { ParsedNumber } from '../types';
import { RE_DATE } from './regex';

const parseDate = (value: string): ParsedNumber | void => {
  if (RE_DATE.test(value)) {
    const parsedDate = Date.parse(value);
    if (!Number.isNaN(parsedDate)) {
      return parsedDate;
    }
  }
  return undefined;
};

export default parseDate;
