// @flow
import type { Order, MappedRecord } from '../types';
import compareValues from './compareValues';

const compareMultiple = (
  recordA: MappedRecord,
  recordB: MappedRecord,
  orders: $ReadOnlyArray<Order>
): number => {
  const { values: valuesA } = recordA;
  const { values: valuesB } = recordB;
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
  return 0;
};

export default compareMultiple;
