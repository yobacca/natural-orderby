import { isNaN } from '../isNaN';

describe('isNaN()', () => {
  it('should return true', () => {
    expect(isNaN(NaN)).toBe(true);
  });
  it('should return false', () => {
    expect(isNaN(1)).toBe(false);
    expect(isNaN('')).toBe(false);
    expect(isNaN(true)).toBe(false);
    expect(isNaN(Symbol())).toBe(false);
    expect(isNaN([])).toBe(false);
    expect(isNaN({})).toBe(false);
    expect(
      isNaN((): void => {
        return;
      })
    ).toBe(false);
    expect(isNaN(null)).toBe(false);
    expect(isNaN(undefined)).toBe(false);
  });
});
