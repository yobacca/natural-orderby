import { compareUnicode } from '../compareUnicode';

describe('compareUnicode()', () => {
  it('should return -1', () => {
    const valueX = 'ö';
    const valueY = 'ü';
    expect(compareUnicode(valueX, valueY)).toBeLessThan(0);
  });
  it('should return 0', () => {
    const valueX = 'ö';
    const valueY = 'ö';
    expect(compareUnicode(valueX, valueY)).toBe(0);
  });
  it('should return 1', () => {
    const valueX = 'ü';
    const valueY = 'ö';
    expect(compareUnicode(valueX, valueY)).toBeGreaterThan(0);
  });
});
