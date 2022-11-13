export const compareUnicode = (stringA: string, stringB: string): number => {
  const result = stringA.localeCompare(stringB);
  return result ? result / Math.abs(result) : 0;
};
