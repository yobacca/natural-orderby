import type { Locale } from '../types';

export const compareUnicode = (
  stringA: string,
  stringB: string,
  locale: Locale,
): number => {
  const result = stringA.localeCompare(stringB, locale);
  return result ? result / Math.abs(result) : 0;
};
