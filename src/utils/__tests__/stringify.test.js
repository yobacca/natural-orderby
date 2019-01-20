// @flow
/* eslint-disable no-new-wrappers */
import stringify from '../stringify';

describe('stringify()', () => {
  it('should return number converted to a string', () => {
    const value = 1;
    const expected = '1';
    expect(stringify(value)).toEqual(expected);
  });
  it('should return Number converted to a string', () => {
    const value = new Number(1);
    const expected = '1';
    expect(stringify(value)).toEqual(expected);
  });
  it('should return lowercase string value without leading or trailing whitespaces', () => {
    const value = ' AbC ';
    const expected = 'abc';
    expect(stringify(value)).toEqual(expected);
  });
  it('should return lowercase String value without leading or trailing whitespaces', () => {
    const value = new String(' AbC ');
    const expected = 'abc';
    expect(stringify(value)).toEqual(expected);
  });
  it('should return boolean value (true) converted to number converted to string', () => {
    const value = true;
    const expected = '1';
    expect(stringify(value)).toEqual(expected);
  });
  it('should return boolean value (false) converted to number converted to string', () => {
    const value = false;
    const expected = '0';
    expect(stringify(value)).toEqual(expected);
  });
  it('should return Boolean value (true) converted to number converted to string', () => {
    const value = new Boolean(true);
    const expected = '1';
    expect(stringify(value)).toEqual(expected);
  });
  it('should return Boolean value (false) converted to number converted to string', () => {
    const value = new Boolean(false);
    const expected = '0';
    expect(stringify(value)).toEqual(expected);
  });
  it('should return Date value converted to number converted to string', () => {
    const value = new Date('2017-12-31');
    const expected = '1514678400000';
    expect(stringify(value)).toEqual(expected);
  });
  it('should return empty string for objects', () => {
    const value = {};
    const expected = '';
    expect(stringify(value)).toEqual(expected);
  });
  it('should return empty string for arrays', () => {
    const value = [];
    const expected = '';
    expect(stringify(value)).toEqual(expected);
  });
  it('should return empty string for functions', () => {
    const value = () => {};
    const expected = '';
    expect(stringify(value)).toEqual(expected);
  });
  it('should return empty string for symbols', () => {
    const value = Symbol();
    const expected = '';
    expect(stringify(value)).toEqual(expected);
  });
  it('should return empty string for undefined', () => {
    const value = undefined;
    const expected = '';
    expect(stringify(value)).toEqual(expected);
  });
  it('should return empty string for null', () => {
    const value = null;
    const expected = '';
    expect(stringify(value)).toEqual(expected);
  });
});
