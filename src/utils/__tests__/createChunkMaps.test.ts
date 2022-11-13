import { createChunkMaps } from '../createChunkMaps';

describe('createChunkMaps()', () => {
  it('should return array of chunk maps (1)', () => {
    const value = '1.2.0';
    const expected = [
      { parsedNumber: 1, normalizedString: '1' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 2, normalizedString: '2' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
    ];
    expect(createChunkMaps(value)).toEqual(expected);
  });
  it('should return array of chunk maps (2)', () => {
    const value = '09 B';
    const expected = [
      { parsedNumber: 9, normalizedString: '09' },
      { parsedNumber: undefined, normalizedString: 'B' },
    ];
    expect(createChunkMaps(value)).toEqual(expected);
  });
});
