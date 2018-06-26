// @flow
import normalizeChunk from '../normalizeChunk';

describe('normalizeChunk()', () => {
  it('should call parseNumber() and return 123', () => {
    const value = '123';
    const chunksLength = 1;
    const expected = 123;
    expect(normalizeChunk(value, chunksLength)).toEqual(expected);
  });
  it('should call parseNumber() and return 1.23', () => {
    const value = '1.23';
    const chunksLength = 1;
    const expected = 1.23;
    expect(normalizeChunk(value, chunksLength)).toEqual(expected);
  });
  it('should not call parseNumber() and return "aB C"', () => {
    const value = '  aB   C     ';
    const chunksLength = 1;
    const expected = 'aB C';
    expect(normalizeChunk(value, chunksLength)).toEqual(expected);
  });
  it('should call parseNumber() and return 0.23', () => {
    const value = '0.23';
    const chunksLength = 1;
    const expected = 0.23;
    expect(normalizeChunk(value, chunksLength)).toEqual(expected);
  });
  it('should not call parseNumber() and return "003"', () => {
    const value = '003';
    const chunksLength = 2;
    const expected = '003';
    expect(normalizeChunk(value, chunksLength)).toEqual(expected);
  });
});
