// @flow
import stringCompare from '../stringCompare';

describe('stringCompare()', () => {
  it('should return -1', () => {
    const valueX = 'a';
    const valueY = 'b';
    expect(stringCompare(valueX, valueY)).toBeLessThan(0);
  });
  it('should return 0', () => {
    const valueX = 'a';
    const valueY = 'a';
    expect(stringCompare(valueX, valueY)).toBe(0);
  });
  it('should return 1', () => {
    const valueX = 'b';
    const valueY = 'a';
    expect(stringCompare(valueX, valueY)).toBeGreaterThan(0);
  });
});
