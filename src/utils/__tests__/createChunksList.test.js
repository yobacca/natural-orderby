// @flow
import createChunksList from '../createChunksList';

describe('createChunksList()', () => {
  it('should call createChunks() and normalizeChunk() for each chunk and return array of chunks', () => {
    const value = '1.2.0';
    const expected = [1, '.', 2, '.', 0];
    expect(createChunksList(value)).toEqual(expected);
  });
});
