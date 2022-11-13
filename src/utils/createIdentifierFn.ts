import type { Identifier, IdentifierFn } from '../types';

export const createIdentifierFn = <T>(
  identifier: Identifier<T>
): IdentifierFn<T> => {
  if (typeof identifier === 'function') {
    // identifier is already a lookup function
    return identifier;
  }
  return (value: unknown): unknown => {
    if (Array.isArray(value)) {
      const index = Number(identifier);
      if (Number.isInteger(index)) {
        return value[index];
      }
    } else if (value && typeof value === 'object') {
      const result = Object.getOwnPropertyDescriptor(value, identifier);
      return result?.value;
    }
    return value;
  };
};
