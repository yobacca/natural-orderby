// @flow
import baseCompare from '../utils/baseCompare';
import getOptions from '../utils/getOptions';

import type { CompareOptions, CompareFn } from '../types';

/**
 * Creates a compare function that defines the natural sort order considering
 * the given `options` which may be passed to [`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
 *
 * If `options` or its property `caseSensitive` is unspecified, values are
 * sorted case sensitive. Otherwise, specify `true` for case sensitive or
 * `false` for case insensitive sorting.
 *
 * If `options` or its property `order` is unspecified, values are sorted in
 * ascending sort order. Otherwise, specify an order of `'desc'` for descending
 * or `'asc'` for ascending sort order of values.
 *
 * @example
 *
 * import { compare } from 'natural-orderby';
 *
 * const users = [
 *   {
 *     username: 'Bamm-Bamm',
 *     lastLogin: {
 *       ip: '192.168.5.2',
 *       datetime: 'Fri Jun 15 2018 16:48:00 GMT+0200 (CEST)'
 *     },
 *   },
 *   {
 *     username: 'Wilma',
 *     lastLogin: {
 *       ip: '192.168.10.1',
 *       datetime: '14 Jun 2018 00:00:00 PDT'
 *     },
 *   },
 *   {
 *     username: 'dino',
 *     lastLogin: {
 *       ip: '192.168.0.2',
 *       datetime: 'June 15, 2018 14:48:00'
 *     },
 *   },
 *   {
 *     username: 'Barney',
 *     lastLogin: {
 *       ip: '192.168.1.1',
 *       datetime: 'Thu, 14 Jun 2018 07:00:00 GMT'
 *     },
 *   },
 *   {
 *     username: 'Pebbles',
 *     lastLogin: {
 *       ip: '192.168.1.21',
 *       datetime: '15 June 2018 14:48 UTC'
 *     },
 *   },
 *   {
 *     username: 'Hoppy',
 *     lastLogin: {
 *       ip: '192.168.5.10',
 *       datetime: '2018-06-15T14:48:00.000Z'
 *     },
 *   },
 * ];
 *
 * users.sort((a, b) => compare()(a.ip, b.ip));
 *
 * // => [
 * //      {
 * //        username: 'dino',
 * //        ip: '192.168.0.2',
 * //        datetime: 'June 15, 2018 14:48:00'
 * //      },
 * //      {
 * //        username: 'Barney',
 * //        ip: '192.168.1.1',
 * //        datetime: 'Thu, 14 Jun 2018 07:00:00 GMT'
 * //      },
 * //      {
 * //        username: 'Pebbles',
 * //        ip: '192.168.1.21',
 * //        datetime: '15 June 2018 14:48 UTC'
 * //      },
 * //      {
 * //        username: 'Bamm-Bamm',
 * //        ip: '192.168.5.2',
 * //        datetime: 'Fri Jun 15 2018 16:48:00 GMT+0200 (CEST)'
 * //      },
 * //      {
 * //        username: 'Hoppy',
 * //        ip: '192.168.5.10',
 * //        datetime: '2018-06-15T14:48:00.000Z'
 * //      },
 * //      {
 * //        username: 'Wilma',
 * //        ip: '192.168.10.1',
 * //        datetime: '14 Jun 2018 00:00:00 PDT'
 * //      }
 * //    ]
 */
function compare(options?: CompareOptions): CompareFn {
  const validatedOptions = getOptions(options);

  return baseCompare(validatedOptions);
}

export default compare;
