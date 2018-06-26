// @flow
import baseOrderBy from '../utils/baseOrderBy';
import getIdentifiers from '../utils/getIdentifiers';
import getOrders from '../utils/getOrders';

import type { Identifier, Order } from '../types';

/**
 * Creates an array of elements, natural sorted by specified identifiers and
 * the corresponding sort orders. This method implements a stable sort
 * algorithm, which means the original sort order of equal elements is
 * preserved.
 *
 * If `collection` is an array of primitives, `identifiers` may be unspecified.
 * Otherwise, you should specify `identifiers` to sort by or `collection` will
 * be returned unsorted. An identifier can expressed by:
 *
 * - an index position, if `collection` is a nested array,
 * - a property name, if `collection` is an array of objects,
 * - a function which returns a particular value from an element of a nested array or an array of objects. This function will be invoked by passing one element of `collection`.
 *
 * If `orders` is unspecified, all values are sorted in ascending order.
 * Otherwise, specify an order of `'desc'` for descending or `'asc'` for
 * ascending sort order of corresponding values. You may also specify a compare
 * function for an order, which will be invoked by two arguments:
 * `(valueA, valueB)`. It must return a number representing the sort order.
 *
 * @example
 *
 * import { orderBy } from 'natural-orderby';
 *
 * const users = [
 *   {
 *     username: 'Bamm-Bamm',
 *     ip: '192.168.5.2',
 *     datetime: 'Fri Jun 15 2018 16:48:00 GMT+0200 (CEST)'
 *   },
 *   {
 *     username: 'Wilma',
 *     ip: '192.168.10.1',
 *     datetime: '14 Jun 2018 00:00:00 PDT'
 *   },
 *   {
 *     username: 'dino',
 *     ip: '192.168.0.2',
 *     datetime: 'June 15, 2018 14:48:00'
 *   },
 *   {
 *     username: 'Barney',
 *     ip: '192.168.1.1',
 *     datetime: 'Thu, 14 Jun 2018 07:00:00 GMT'
 *   },
 *   {
 *     username: 'Pebbles',
 *     ip: '192.168.1.21',
 *     datetime: '15 June 2018 14:48 UTC'
 *   },
 *   {
 *     username: 'Hoppy',
 *     ip: '192.168.5.10',
 *     datetime: '2018-06-15T14:48:00.000Z'
 *   },
 * ];
 *
 * orderBy(
 *   users,
 *   [v => v.datetime, v => v.ip],
 *   ['desc', 'asc']
 * );
 *
 * // => [
 * //      {
 * //        username: 'dino',
 * //        ip: '192.168.0.2',
 * //        datetime: 'June 15, 2018 14:48:00',
 * //      },
 * //      {
 * //        username: 'Pebbles',
 * //        ip: '192.168.1.21',
 * //        datetime: '15 June 2018 14:48 UTC',
 * //      },
 * //      {
 * //        username: 'Bamm-Bamm',
 * //        ip: '192.168.5.2',
 * //        datetime: 'Fri Jun 15 2018 16:48:00 GMT+0200 (CEST)',
 * //      },
 * //      {
 * //        username: 'Hoppy',
 * //        ip: '192.168.5.10',
 * //        datetime: '2018-06-15T14:48:00.000Z',
 * //      },
 * //      {
 * //        username: 'Barney',
 * //        ip: '192.168.1.1',
 * //        datetime: 'Thu, 14 Jun 2018 07:00:00 GMT',
 * //      },
 * //      {
 * //        username: 'Wilma',
 * //        ip: '192.168.10.1',
 * //        datetime: '14 Jun 2018 00:00:00 PDT',
 * //      },
 * //    ]
 */
function orderBy<T>(
  collection: $ReadOnlyArray<T>,
  identifiers?: ?$ReadOnlyArray<Identifier<T>> | ?Identifier<T>,
  orders?: ?$ReadOnlyArray<Order> | ?Order
): Array<T> {
  if (!collection || !Array.isArray(collection)) {
    return [];
  }

  const validatedIdentifiers = getIdentifiers(identifiers);
  const validatedOrders = getOrders(orders);

  return baseOrderBy(collection, validatedIdentifiers, validatedOrders);
}

export default orderBy;
