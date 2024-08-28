import { compareValues } from './compareValues';
import type { Order, MappedRecord } from '../types';

export const compareMultiple = (
  recordA: MappedRecord,
  recordB: MappedRecord,
  orders: ReadonlyArray<Order>,
): number => {
  const { index: indexA, values: valuesA } = recordA;
  const { index: indexB, values: valuesB } = recordB;
  const { length } = valuesA;
  const ordersLength = orders.length;
  for (let i = 0; i < length; i++) {
    const order = i < ordersLength ? orders[i] : null;
    if (order && typeof order === 'function') {
      const result = order(valuesA[i].value, valuesB[i].value);
      if (result) {
        return result;
      }
    } else {
      const result = compareValues(valuesA[i], valuesB[i]);
      if (result) {
        return result * (order === 'desc' ? -1 : 1);
      }
    }
  }
  return indexA - indexB;
};
