import { numberify } from '../numberify';

describe('numberify()', () => {
  it('should call parseNumber() and return a number', () => {
    const value = '123';
    const expected = 123;
    expect(numberify(value)).toEqual(expected);
  });
  it('should call parseNumber() and parseDate() and return 1514743200000', () => {
    const value = '2017-12-31T18:00:00Z';
    const expected = 1514743200000;
    expect(numberify(value)).toEqual(expected);
  });
  it('should call parseNumber() and parseDate() return undefined, if value is a string', () => {
    const value = 'abc';
    const expected = undefined;
    expect(numberify(value)).toEqual(expected);
  });
  it('should call parseNumber() and parseDate() return undefined, if value is an empty string', () => {
    const value = '';
    const expected = undefined;
    expect(numberify(value)).toEqual(expected);
  });
});
