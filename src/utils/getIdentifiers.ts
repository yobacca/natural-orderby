import type { Identifier } from '../types';

export const getIdentifiers = <T>(
  identifiers?: ReadonlyArray<Identifier<T>> | Identifier<T> | null,
): Array<Identifier<T>> => {
  if (!identifiers) {
    return [];
  }
  const identifierList = !Array.isArray(identifiers)
    ? [identifiers]
    : [...identifiers];
  if (
    identifierList.some(
      (identifier) =>
        typeof identifier !== 'string' &&
        typeof identifier !== 'number' &&
        typeof identifier !== 'function',
    )
  ) {
    return [];
  }
  return identifierList;
};
