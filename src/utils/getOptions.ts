import type { OrderEnum, CompareOptions, BaseCompareOptions } from '../types';

const isValidOrder = (value: unknown): boolean =>
  typeof value === 'string' && (value === 'asc' || value === 'desc');

export const getOptions = (
  customOptions?: CompareOptions,
): BaseCompareOptions => {
  let order: OrderEnum = 'asc';
  let locale = 'en';
  if (typeof customOptions === 'string' && isValidOrder(customOptions)) {
    order = customOptions;
  } else if (customOptions && typeof customOptions === 'object') {
    if (customOptions.order && isValidOrder(customOptions.order)) {
      order = customOptions.order;
    }
    if (customOptions.locale && customOptions.locale.length > 0) {
      locale = customOptions.locale;
    }
  }
  return {
    order,
    locale,
  };
};
