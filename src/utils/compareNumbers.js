// @flow
const compareNumbers = (numberA: number, numberB: number): number => {
  if (numberA < numberB) {
    return -1;
  }
  if (numberA > numberB) {
    return 1;
  }
  return 0;
};

export default compareNumbers;
