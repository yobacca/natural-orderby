import { compareValues } from './compareValues';
import { getMappedValueRecord } from './getMappedValueRecord';
import type { BaseCompareOptions } from '../types';

export const baseCompare =
  (options: BaseCompareOptions) =>
  (valueA: unknown, valueB: unknown, locale = 'en'): number => {
    const a = getMappedValueRecord(valueA);
    const b = getMappedValueRecord(valueB);

    const result = compareValues(a, b, locale);

    return result * (options.order === 'desc' ? -1 : 1);
  };
