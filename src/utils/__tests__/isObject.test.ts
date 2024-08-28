import { isObject } from '../isObject';

describe('isObject()', () => {
  it('should return true', () => {
    expect(isObject({})).toBe(true);
  });
  it('should return false', () => {
    expect(isObject(1)).toBe(false);
    expect(isObject('')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(Symbol())).toBe(false);
    expect(isObject(NaN)).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject(new Date())).toBe(false);
    expect(isObject(new Number(1))).toBe(false);
    expect(isObject(new String('a'))).toBe(false);
    expect(isObject(new Boolean(true))).toBe(false);
    expect(
      isObject((): void => {
        return;
      }),
    ).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });
});
