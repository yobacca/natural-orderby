// @flow
import type { MappedValueRecord } from '../types';

const compareOtherTypes = (
  valueA: MappedValueRecord,
  valueB: MappedValueRecord
): number => {
  if (!valueA.chunks ? valueB.chunks : !valueB.chunks) {
    return !valueA.chunks ? 1 : -1;
  }
  if (valueA.isNaN ? !valueB.isNaN : valueB.isNaN) {
    return valueA.isNaN ? -1 : 1;
  }
  if (valueA.isSymbol ? !valueB.isSymbol : valueB.isSymbol) {
    return valueA.isSymbol ? -1 : 1;
  }
  if (valueA.isObject ? !valueB.isObject : valueB.isObject) {
    return valueA.isObject ? -1 : 1;
  }
  if (valueA.isArray ? !valueB.isArray : valueB.isArray) {
    return valueA.isArray ? -1 : 1;
  }
  if (valueA.isFunction ? !valueB.isFunction : valueB.isFunction) {
    return valueA.isFunction ? -1 : 1;
  }
  if (valueA.isNull ? !valueB.isNull : valueB.isNull) {
    return valueA.isNull ? -1 : 1;
  }
  return 0;
};

export default compareOtherTypes;
