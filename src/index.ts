/*
 * Javascript natural sort algorithm with unicode support
 * based on chunking idea by Dave Koelle
 *
 * https://github.com/yobacca/natural-sort-order
 * released under MIT License
 */
import { compare } from './compare';
import { orderBy } from './orderBy';
import type { Identifier, Order } from './types';
import type { CompareOptions, CompareFn } from './types';

export type { Identifier, Order, CompareOptions, CompareFn };
export { orderBy, compare };
