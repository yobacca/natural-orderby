import { isSymbol } from '../isSymbol';

describe('isSymbol()', () => {
  it('should return true', () => {
    expect(isSymbol(Symbol())).toBe(true);
  });
  it('should return false', () => {
    expect(isSymbol(1)).toBe(false);
    expect(isSymbol('')).toBe(false);
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol(NaN)).toBe(false);
    expect(isSymbol({})).toBe(false);
    expect(isSymbol([])).toBe(false);
    expect(
      isSymbol((): void => {
        return;
      })
    ).toBe(false);
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
  });
});
