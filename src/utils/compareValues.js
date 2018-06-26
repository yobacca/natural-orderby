// @flow
import type { MappedValueRecord } from '../types';
import compareNumbers from './compareNumbers';
import compareChunks from './compareChunks';
import compareOtherTypes from './compareOtherTypes';

const compareValues = (
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

export default compareValues;
