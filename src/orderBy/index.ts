import type { Identifier, Order } from '../types';
import { baseOrderBy } from '../utils/baseOrderBy';
import { getIdentifiers } from '../utils/getIdentifiers';
import { getOrders } from '../utils/getOrders';

/**
 * Creates an array of elements, natural sorted by specified identifiers and
 * the corresponding sort orders. This method implements a stable sort
 * algorithm, which means the original sort order of equal elements is
 * preserved.
 */
export function orderBy<T>(
  collection: ReadonlyArray<T>,
  identifiers?: ReadonlyArray<Identifier<T>> | Identifier<T> | null,
  orders?: ReadonlyArray<Order> | Order | null,
): Array<T> {
  if (!collection || !Array.isArray(collection)) {
    return [];
  }

  const validatedIdentifiers = getIdentifiers(identifiers);
  const validatedOrders = getOrders(orders);

  return baseOrderBy(collection, validatedIdentifiers, validatedOrders);
}
