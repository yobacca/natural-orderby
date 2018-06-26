// @flow
import type { CompareOptions, BaseCompareOptions } from '../types';

const defaultOptions: BaseCompareOptions = {
  caseSensitive: true,
  order: 'asc',
};

const getOptions = (customOptions?: CompareOptions): BaseCompareOptions => {
  if (!customOptions || typeof customOptions !== 'object') {
    return defaultOptions;
  }
  return {
    caseSensitive:
      typeof customOptions.caseSensitive === 'boolean'
        ? customOptions.caseSensitive
        : defaultOptions.caseSensitive,
    order:
      customOptions.order === 'asc' || customOptions.order === 'desc'
        ? customOptions.order
        : defaultOptions.order,
  };
};

export default getOptions;
