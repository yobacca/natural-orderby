// @flow
import getElementByIndex from '../getElementByIndex';

describe('getElementByIndex()', () => {
  it('should return element at index 1', () => {
    const collection = [
      { user: 'barney', age: 34 },
      { user: 'bill', age: 50 },
      { user: 'bob', age: 45 },
    ];
    const index = 1;
    const expected = collection[index];
    expect(getElementByIndex(collection, index)).toEqual(expected);
  });
  it('should return undefined', () => {
    const collection = [
      { user: 'barney', age: 34 },
      { user: 'bill', age: 50 },
      { user: 'bob', age: 45 },
    ];
    const index = 5;
    const expected = collection[index];
    expect(getElementByIndex(collection, index)).toEqual(expected);
  });
});
