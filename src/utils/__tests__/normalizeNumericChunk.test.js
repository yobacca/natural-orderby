// @flow
import normalizeNumericChunk from '../normalizeNumericChunk';

describe('normalizeNumericChunk()', () => {
  it('should call parseNumber() and return 123', () => {
    const chunk = '123';
    const index = 0;
    const array = [chunk];
    const expected = 123;
    expect(normalizeNumericChunk(chunk, index, array)).toEqual(expected);
  });
  it('should call parseNumber() and return 1.23', () => {
    const chunk = '1.23';
    const index = 0;
    const array = [chunk];
    const expected = 1.23;
    expect(normalizeNumericChunk(chunk, index, array)).toEqual(expected);
  });
  it('should return undefined', () => {
    const chunk = '  aB   C     ';
    const index = 0;
    const array = [chunk];
    const expected = undefined;
    expect(normalizeNumericChunk(chunk, index, array)).toEqual(expected);
  });
  it('should call parseNumber() and return 0.23', () => {
    const chunk = '0.23';
    const index = 0;
    const array = [chunk];
    const expected = 0.23;
    expect(normalizeNumericChunk(chunk, index, array)).toEqual(expected);
  });
  it('should call parseNumber() and return 3', () => {
    const chunk = '003';
    const index = 0;
    const array = [chunk, 'abc'];
    const expected = 3;
    expect(normalizeNumericChunk(chunk, index, array)).toEqual(expected);
  });
  it('should call parseNumber() and return 3', () => {
    const chunk = '003';
    const index = 1;
    const array = ['abc', chunk];
    const expected = 3;
    expect(normalizeNumericChunk(chunk, index, array)).toEqual(expected);
  });
  it('should not call parseNumber() and return "003"', () => {
    const chunk = '003';
    const index = 1;
    const array = ['.', chunk];
    const expected = undefined;
    expect(normalizeNumericChunk(chunk, index, array)).toEqual(expected);
  });
  it('should call parseNumber() and return 1', () => {
    const chunk = '001';
    const index = 0;
    const array = [chunk, '.', '001'];
    const expected = 1;
    expect(normalizeNumericChunk(chunk, index, array)).toEqual(expected);
  });
});
