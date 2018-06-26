// @flow
/* eslint-disable global-require */
import compareChunks from '../compareChunks';

describe('compareChunks()', () => {
  it('should return -1', () => {
    const chunksA = [1, '.', 0, '.', 0];
    const chunksB = [1, '.', 0, '.', 1];
    expect(compareChunks(chunksA, chunksB)).toBeLessThan(0);
  });
  it('should return 0', () => {
    const chunksA = [1, '.', 0, '.', 0];
    const chunksB = [1, '.', 0, '.', 0];
    expect(compareChunks(chunksA, chunksB)).toBe(0);
  });
  it('should return 1', () => {
    const chunksA = [1, '.', 0, '.', 1];
    const chunksB = [1, '.', 0, '.', 0];
    expect(compareChunks(chunksA, chunksB)).toBeGreaterThan(0);
  });
  it('should return -1', () => {
    const chunksA = [1, '.', 0, '.', 1];
    const chunksB = [2, '.', 0, '.', 0];
    expect(compareChunks(chunksA, chunksB)).toBeLessThan(0);
  });
  it('should return -1', () => {
    const chunksA = [1, '.', 0, '.', 0, '-alpha'];
    const chunksB = [1, '.', 0, '.', 0];
    expect(compareChunks(chunksA, chunksB)).toBeGreaterThan(0);
  });
  it('should return -1', () => {
    const chunksA = [1];
    const chunksB = ['x'];
    expect(compareChunks(chunksA, chunksB)).toBeLessThan(0);
  });
  it('should return 1', () => {
    const chunksA = ['x'];
    const chunksB = [1];
    expect(compareChunks(chunksA, chunksB)).toBeGreaterThan(0);
  });
  it('should return -1', () => {
    const chunksA = ['ö'];
    const chunksB = ['ü'];
    expect(compareChunks(chunksA, chunksB)).toBeLessThan(0);
  });
  it('should return 0', () => {
    const chunksA = ['ö'];
    const chunksB = ['ö'];
    expect(compareChunks(chunksA, chunksB)).toBe(0);
  });
  it('should return 1', () => {
    const chunksA = ['ü'];
    const chunksB = ['ö'];
    expect(compareChunks(chunksA, chunksB)).toBeGreaterThan(0);
  });
  it('should return -1', () => {
    const chunksA = ['a'];
    const chunksB = ['b'];
    expect(compareChunks(chunksA, chunksB)).toBeLessThan(0);
  });
  it('should return 0', () => {
    const chunksA = ['a'];
    const chunksB = ['a'];
    expect(compareChunks(chunksA, chunksB)).toBe(0);
  });
  it('should return 1', () => {
    const chunksA = ['b'];
    const chunksB = ['a'];
    expect(compareChunks(chunksA, chunksB)).toBeGreaterThan(0);
  });
  it('should return -1', () => {
    const chunksA = [''];
    const chunksB = [0];
    expect(compareChunks(chunksA, chunksB)).toBeLessThan(0);
  });
  it('should return 0', () => {
    const chunksA = [''];
    const chunksB = [''];
    expect(compareChunks(chunksA, chunksB)).toBe(0);
  });
  it('should return 1', () => {
    const chunksA = [0];
    const chunksB = [''];
    expect(compareChunks(chunksA, chunksB)).toBeGreaterThan(0);
  });
});
