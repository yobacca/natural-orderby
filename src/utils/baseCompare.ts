import type { BaseCompareOptions } from '../types';
import { compareValues } from './compareValues';
import { getMappedValueRecord } from './getMappedValueRecord';

export const baseCompare =
  (options: BaseCompareOptions) =>
  (valueA: unknown, valueB: unknown): number => {
    const a = getMappedValueRecord(valueA);
    const b = getMappedValueRecord(valueB);

    const result = compareValues(a, b);

    return result * (options.order === 'desc' ? -1 : 1);
  };
