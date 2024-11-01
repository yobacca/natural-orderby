export const compareUnicode = (
  stringA: string,
  stringB: string,
  locale = 'en',
): number => {
  const result = stringA.localeCompare(stringB, locale);
  return result ? result / Math.abs(result) : 0;
};
