// @flow
import isUndefined from '../isUndefined';

describe('isUndefined()', () => {
  it('should return true', () => {
    expect(isUndefined(undefined)).toBe(true);
  });
  it('should return false', () => {
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined('')).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(NaN)).toBe(false);
    expect(isUndefined(Symbol())).toBe(false);
    expect(isUndefined([])).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined(() => {})).toBe(false);
    expect(isUndefined(null)).toBe(false);
  });
});
