export const stringCompare = (stringA: string, stringB: string): number => {
  if (stringA < stringB) {
    return -1;
  }
  if (stringA > stringB) {
    return 1;
  }
  return 0;
};
