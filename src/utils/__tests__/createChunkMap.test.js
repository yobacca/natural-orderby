// @flow
import createChunkMap from '../createChunkMap';

describe('createChunkMap()', () => {
  it('should return a chunk map for a number', () => {
    const chunk = '003';
    const index = 1;
    const array = ['abc', chunk];
    const expected = { parsedNumber: 3, normalizedString: '003' };
    expect(createChunkMap(chunk, index, array)).toEqual(expected);
  });
  it('should return a chunk map for a string', () => {
    const chunk = ' B';
    const index = 1;
    const array = ['09', chunk];
    const expected = { parsedNumber: undefined, normalizedString: 'B' };
    expect(createChunkMap(chunk, index, array)).toEqual(expected);
  });
});
