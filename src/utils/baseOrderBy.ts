import { compareMultiple } from './compareMultiple';
import { createIdentifierFn } from './createIdentifierFn';
import { getElementByIndex } from './getElementByIndex';
import { getMappedValueRecord } from './getMappedValueRecord';
import { getValueByIdentifier } from './getValueByIdentifier';
import type {
  Identifier,
  Order,
  MappedCollection,
  IdentifierFn,
  Locale,
} from '../types';

export const baseOrderBy = <T>(
  collection: ReadonlyArray<T>,
  identifiers: ReadonlyArray<Identifier<T>>,
  orders: ReadonlyArray<Order>,
  locale?: Locale,
): Array<T> => {
  const identifierFns: Array<IdentifierFn<T>> = identifiers.length
    ? identifiers.map(createIdentifierFn)
    : [(value: unknown): unknown => value];

  // temporary array holds elements with position and sort-values
  const mappedCollection: MappedCollection = collection.map(
    (element, index) => {
      const values = identifierFns
        .map((identifier) => getValueByIdentifier(element, identifier))
        .map(getMappedValueRecord);
      return {
        index,
        values,
      };
    },
  );

  // iterate over values and compare values until a != b or last value reached
  mappedCollection.sort((recordA, recordB) =>
    compareMultiple(recordA, recordB, orders, locale),
  );

  return mappedCollection.map((element) =>
    getElementByIndex(collection, element.index),
  );
};
