// @flow
const getElementByIndex = <T>(
  collection: $ReadOnlyArray<T>,
  index: number
): T => collection[index];

export default getElementByIndex;
