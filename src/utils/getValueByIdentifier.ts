import type { IdentifierFn } from '../types';

export const getValueByIdentifier = <T>(
  value: T,
  getValue: IdentifierFn<T>,
): unknown => getValue(value);
