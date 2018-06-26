// @flow
import configureGetMappedValueRecord from './getMappedValueRecord';
import compareValues from './compareValues';

import type { BaseCompareOptions } from '../types';

const baseCompare = (options: BaseCompareOptions) => (
  valueA: mixed,
  valueB: mixed
): number => {
  const getMappedValueRecord = configureGetMappedValueRecord(
    options.caseSensitive
  );
  const a = getMappedValueRecord(valueA);
  const b = getMappedValueRecord(valueB);

  const result = compareValues(a, b);
  return result * (options.order === 'desc' ? -1 : 1);
};

export default baseCompare;
