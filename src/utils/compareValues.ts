import type { MappedValueRecord } from '../types';
import { compareChunks } from './compareChunks';
import { compareNumbers } from './compareNumbers';
import { compareOtherTypes } from './compareOtherTypes';

export const compareValues = (
  valueA: MappedValueRecord,
  valueB: MappedValueRecord
): number => {
  if (valueA.value === valueB.value) {
    return 0;
  }
  if (valueA.parsedNumber !== undefined && valueB.parsedNumber !== undefined) {
    return compareNumbers(valueA.parsedNumber, valueB.parsedNumber);
  }
  if (valueA.chunks && valueB.chunks) {
    return compareChunks(valueA.chunks, valueB.chunks);
  }
  return compareOtherTypes(valueA, valueB);
};
