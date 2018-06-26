// @flow
import type { Identifier } from '../types';

const getIdentifiers = <T>(
  identifiers?: ?$ReadOnlyArray<Identifier<T>> | ?Identifier<T>
): Array<Identifier<T>> => {
  if (!identifiers) {
    return [];
  }
  const identifierList = !Array.isArray(identifiers)
    ? [identifiers]
    : [...identifiers];
  if (
    identifierList.some(
      identifier =>
        typeof identifier !== 'string' &&
        typeof identifier !== 'number' &&
        typeof identifier !== 'function'
    )
  ) {
    return [];
  }
  return identifierList;
};

export default getIdentifiers;
