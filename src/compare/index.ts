import type { CompareOptions, CompareFn } from '../types';
import { baseCompare } from '../utils/baseCompare';
import { getOptions } from '../utils/getOptions';

/**
 * Creates a compare function that defines the natural sort order considering
 * the given `options` which may be passed to [`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
 */
export function compare(options?: CompareOptions): CompareFn {
  const validatedOptions = getOptions(options);

  return baseCompare(validatedOptions);
}
