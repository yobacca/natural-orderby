// @flow
import isFunction from '../isFunction';

describe('isFunction()', () => {
  it('should return true', () => {
    expect(isFunction(() => {})).toBe(true);
    function a() {}
    expect(isFunction(a)).toBe(true);
  });
  it('should return false', () => {
    expect(isFunction(1)).toBe(false);
    expect(isFunction('')).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(Symbol())).toBe(false);
    expect(isFunction(NaN)).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
  });
});
