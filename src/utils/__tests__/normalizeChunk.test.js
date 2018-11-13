// @flow
import normalizeChunk from '../normalizeChunk';

describe('normalizeChunk()', () => {
  it('should call parseNumber() and return 123', () => {
    const chunk = '123';
    const index = 0;
    const array = [chunk];
    const expected = 123;
    expect(normalizeChunk(chunk, index, array)).toEqual(expected);
  });
  it('should call parseNumber() and return 1.23', () => {
    const chunk = '1.23';
    const index = 0;
    const array = [chunk];
    const expected = 1.23;
    expect(normalizeChunk(chunk, index, array)).toEqual(expected);
  });
  it('should not call parseNumber() and return "aB C"', () => {
    const chunk = '  aB   C     ';
    const index = 0;
    const array = [chunk];
    const expected = 'aB C';
    expect(normalizeChunk(chunk, index, array)).toEqual(expected);
  });
  it('should call parseNumber() and return 0.23', () => {
    const chunk = '0.23';
    const index = 0;
    const array = [chunk];
    const expected = 0.23;
    expect(normalizeChunk(chunk, index, array)).toEqual(expected);
  });
  it('should not call parseNumber() and return "003"', () => {
    const chunk = '003';
    const index = 0;
    const array = [chunk, 'abc'];
    const expected = '003';
    expect(normalizeChunk(chunk, index, array)).toEqual(expected);
  });
  it('should call parseNumber() and return 3', () => {
    const chunk = '003';
    const index = 1;
    const array = ['abc', chunk];
    const expected = 3;
    expect(normalizeChunk(chunk, index, array)).toEqual(expected);
  });
  it('should not call parseNumber() and return "003"', () => {
    const chunk = '003';
    const index = 1;
    const array = ['.', chunk];
    const expected = '003';
    expect(normalizeChunk(chunk, index, array)).toEqual(expected);
  });
  it('should call parseNumber() and return 1', () => {
    const chunk = '001';
    const index = 0;
    const array = [chunk, '.', '001'];
    const expected = 1;
    expect(normalizeChunk(chunk, index, array)).toEqual(expected);
  });
});
