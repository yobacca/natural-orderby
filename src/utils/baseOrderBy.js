// @flow
import compareMultiple from './compareMultiple';
import createIdentifierFn from './createIdentifierFn';
import getMappedValueRecord from './getMappedValueRecord';
import getValueByIdentifier from './getValueByIdentifier';
import getElementByIndex from './getElementByIndex';

import type {
  Identifier,
  Order,
  MappedCollection,
  IdentifierFn,
} from '../types';

const baseOrderBy = <T>(
  collection: $ReadOnlyArray<T>,
  identifiers: $ReadOnlyArray<Identifier<T>>,
  orders: $ReadOnlyArray<Order>
): Array<T> => {
  const identifierFns: Array<IdentifierFn<T>> = identifiers.length
    ? identifiers.map(createIdentifierFn)
    : [(value: T): T => value];

  // temporary array holds elements with position and sort-values
  const mappedCollection: MappedCollection = collection.map(
    (element, index) => {
      const values = identifierFns
        .map(identifier => getValueByIdentifier(element, identifier))
        .map(getMappedValueRecord());
      return {
        index,
        values,
      };
    }
  );

  // iterate over values and compare values until a != b or last value reached
  mappedCollection.sort((recordA, recordB) =>
    compareMultiple(recordA, recordB, orders)
  );

  return mappedCollection.map(element =>
    getElementByIndex(collection, element.index)
  );
};

export default baseOrderBy;
