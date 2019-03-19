// @flow
/* eslint-disable global-require */
import compareChunks from '../compareChunks';

describe('compareChunks()', () => {
  it('should return -1', () => {
    const chunksA = [
      { parsedNumber: 1, normalizedString: '1' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
    ];
    const chunksB = [
      { parsedNumber: 1, normalizedString: '1' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 1, normalizedString: '1' },
    ];
    expect(compareChunks(chunksA, chunksB)).toBeLessThan(0);
  });
  it('should return 0', () => {
    const chunksA = [
      { parsedNumber: 1, normalizedString: '1' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
    ];
    const chunksB = [
      { parsedNumber: 1, normalizedString: '1' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
    ];
    expect(compareChunks(chunksA, chunksB)).toBe(0);
  });
  it('should return 1', () => {
    const chunksA = [
      { parsedNumber: 1, normalizedString: '1' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 1, normalizedString: '1' },
    ];
    const chunksB = [
      { parsedNumber: 1, normalizedString: '1' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
    ];
    expect(compareChunks(chunksA, chunksB)).toBeGreaterThan(0);
  });
  it('should return -1', () => {
    const chunksA = [
      { parsedNumber: 1, normalizedString: '1' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 1, normalizedString: '1' },
    ];
    const chunksB = [
      { parsedNumber: 2, normalizedString: '2' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
    ];
    expect(compareChunks(chunksA, chunksB)).toBeLessThan(0);
  });
  it('should return -1', () => {
    const chunksA = [
      { parsedNumber: 1, normalizedString: '1' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
      { parsedNumber: undefined, normalizedString: '-alpha' },
    ];
    const chunksB = [
      { parsedNumber: 1, normalizedString: '1' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
      { parsedNumber: undefined, normalizedString: '.' },
      { parsedNumber: 0, normalizedString: '0' },
    ];
    expect(compareChunks(chunksA, chunksB)).toBeGreaterThan(0);
  });
  it('should return -1', () => {
    const chunksA = [{ parsedNumber: 1, normalizedString: '1' }];
    const chunksB = [{ parsedNumber: undefined, normalizedString: 'x' }];
    expect(compareChunks(chunksA, chunksB)).toBeLessThan(0);
  });
  it('should return 1', () => {
    const chunksA = [{ parsedNumber: undefined, normalizedString: 'x' }];
    const chunksB = [{ parsedNumber: 1, normalizedString: '1' }];
    expect(compareChunks(chunksA, chunksB)).toBeGreaterThan(0);
  });
  it('should return -1', () => {
    const chunksA = [{ parsedNumber: undefined, normalizedString: 'ö' }];
    const chunksB = [{ parsedNumber: undefined, normalizedString: 'ü' }];
    expect(compareChunks(chunksA, chunksB)).toBeLessThan(0);
  });
  it('should return 0', () => {
    const chunksA = [{ parsedNumber: undefined, normalizedString: 'ö' }];
    const chunksB = [{ parsedNumber: undefined, normalizedString: 'ö' }];
    expect(compareChunks(chunksA, chunksB)).toBe(0);
  });
  it('should return 1', () => {
    const chunksA = [{ parsedNumber: undefined, normalizedString: 'ü' }];
    const chunksB = [{ parsedNumber: undefined, normalizedString: 'ö' }];
    expect(compareChunks(chunksA, chunksB)).toBeGreaterThan(0);
  });
  it('should return -1', () => {
    const chunksA = [{ parsedNumber: undefined, normalizedString: 'a' }];
    const chunksB = [{ parsedNumber: undefined, normalizedString: 'b' }];
    expect(compareChunks(chunksA, chunksB)).toBeLessThan(0);
  });
  it('should return 0', () => {
    const chunksA = [{ parsedNumber: undefined, normalizedString: 'a' }];
    const chunksB = [{ parsedNumber: undefined, normalizedString: 'a' }];
    expect(compareChunks(chunksA, chunksB)).toBe(0);
  });
  it('should return 1', () => {
    const chunksA = [{ parsedNumber: undefined, normalizedString: 'b' }];
    const chunksB = [{ parsedNumber: undefined, normalizedString: 'a' }];
    expect(compareChunks(chunksA, chunksB)).toBeGreaterThan(0);
  });
  it('should return -1', () => {
    const chunksA = [{ parsedNumber: undefined, normalizedString: '' }];
    const chunksB = [{ parsedNumber: 0, normalizedString: '0' }];
    expect(compareChunks(chunksA, chunksB)).toBeLessThan(0);
  });
  it('should return 0', () => {
    const chunksA = [{ parsedNumber: undefined, normalizedString: '' }];
    const chunksB = [{ parsedNumber: undefined, normalizedString: '' }];
    expect(compareChunks(chunksA, chunksB)).toBe(0);
  });
  it('should return 1', () => {
    const chunksA = [{ parsedNumber: 0, normalizedString: '0' }];
    const chunksB = [{ parsedNumber: undefined, normalizedString: '' }];
    expect(compareChunks(chunksA, chunksB)).toBeGreaterThan(0);
  });
  it('should return -1', () => {
    const chunksA = [{ parsedNumber: 1, normalizedString: '001' }];
    const chunksB = [{ parsedNumber: 1, normalizedString: '01' }];
    expect(compareChunks(chunksA, chunksB)).toBeLessThan(0);
  });
  it('should return -1', () => {
    const chunksA = [{ parsedNumber: 1, normalizedString: '001' }];
    const chunksB = [{ parsedNumber: 1, normalizedString: '001' }];
    expect(compareChunks(chunksA, chunksB)).toBe(0);
  });
  it('should return 1', () => {
    const chunksA = [{ parsedNumber: 1, normalizedString: '01' }];
    const chunksB = [{ parsedNumber: 1, normalizedString: '001' }];
    expect(compareChunks(chunksA, chunksB)).toBeGreaterThan(0);
  });
});
