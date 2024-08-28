import { isNull } from '../isNull';

describe('isNull()', () => {
  it('should return true', () => {
    expect(isNull(null)).toBe(true);
  });
  it('should return false', () => {
    expect(isNull(1)).toBe(false);
    expect(isNull('')).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull(NaN)).toBe(false);
    expect(isNull(Symbol())).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull({})).toBe(false);
    expect(
      isNull((): void => {
        return;
      }),
    ).toBe(false);
    expect(isNull(undefined)).toBe(false);
  });
});
