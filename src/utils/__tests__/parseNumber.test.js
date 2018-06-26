// @flow
import parseNumber from '../parseNumber';

describe('parseNumber()', () => {
  it('should return 123', () => {
    const value = '123';
    const expected = 123;
    expect(parseNumber(value)).toEqual(expected);
  });
  it('should return 1.23', () => {
    const value = '1.23';
    const expected = 1.23;
    expect(parseNumber(value)).toEqual(expected);
  });
  it('should return 123', () => {
    const value = '1.23e2';
    const expected = 123;
    expect(parseNumber(value)).toEqual(expected);
  });
  it('should return 123', () => {
    const value = '0x7B';
    const expected = 123;
    expect(parseNumber(value)).toEqual(expected);
  });
  it('should return undefined', () => {
    const value = 'abc';
    const expected = undefined;
    expect(parseNumber(value)).toEqual(expected);
  });
  it('should return undefined', () => {
    const value = '';
    const expected = undefined;
    expect(parseNumber(value)).toEqual(expected);
  });
});
