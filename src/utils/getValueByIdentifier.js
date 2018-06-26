// @flow
import type { IdentifierFn } from '../types';

const getValueByIdentifier = <T>(
  value: T,
  getValue: IdentifierFn<T>
): mixed | T => getValue(value);

export default getValueByIdentifier;
