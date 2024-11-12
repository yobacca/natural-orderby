import { parseNumber } from '../parseNumber';

describe('parseNumber()', () => {
  it('should return 123', () => {
    const value = '123';
    const expected = 123;
    expect(parseNumber(value)).toEqual(expected);
  });
  it('should return 1.23 for a float', () => {
    const value = '1.23';
    const expected = 1.23;
    expect(parseNumber(value)).toEqual(expected);
  });
  it('should return 123 for scientific notation', () => {
    const value = '1.23e2';
    const expected = 123;
    expect(parseNumber(value)).toEqual(expected);
  });
  it('should return 123 for a hexadecimal number', () => {
    const value = '0x7B';
    const expected = 123;
    expect(parseNumber(value)).toEqual(expected);
  });
  it('should return undefined', () => {
    const value = 'abc';
    const expected = undefined;
    expect(parseNumber(value)).toEqual(expected);
  });
  it('should return undefined for an empty string', () => {
    const value = '';
    const expected = undefined;
    expect(parseNumber(value)).toEqual(expected);
  });
  it('should return 1000000 for number with numeric separators', () => {
    const value = '1_000_000';
    const expected = 1000000;
    expect(parseNumber(value)).toEqual(expected);
  });
});
