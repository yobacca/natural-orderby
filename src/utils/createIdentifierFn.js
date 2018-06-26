// @flow
import type { Identifier, IdentifierFn } from '../types';

const createIdentifierFn = <T>(identifier: Identifier<T>): IdentifierFn<T> => {
  if (typeof identifier === 'function') {
    // identifier is already a lookup function
    return identifier;
  }
  return (value: T): mixed => {
    if (Array.isArray(value)) {
      const index = Number(identifier);
      if (Number.isInteger(index)) {
        return value[index];
      }
    } else if (
      value &&
      typeof value === 'object' &&
      typeof identifier !== 'function'
    ) {
      return value[identifier];
    }
    return value;
  };
};

export default createIdentifierFn;
