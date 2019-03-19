// @flow
import normalizeAlphaChunk from '../normalizeAlphaChunk';

describe('normalizeAlphaChunk()', () => {
  it('should return "aB C"', () => {
    const chunk = '  aB   C     ';
    const expected = 'aB C';
    expect(normalizeAlphaChunk(chunk)).toEqual(expected);
  });
  it('should return "003"', () => {
    const chunk = '003';
    const expected = '003';
    expect(normalizeAlphaChunk(chunk)).toEqual(expected);
  });
});
