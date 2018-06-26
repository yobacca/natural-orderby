// @flow
import createIdentifierFn from '../createIdentifierFn';

describe('createIdentifierFn()', () => {
  it('should return value of identifier "user"', () => {
    const element = { user: 'barney', age: 34 };
    const getValue = createIdentifierFn('user');
    const expected = element.user;
    expect(getValue(element)).toEqual(expected);
  });
  it('should return value of identifier "user"', () => {
    const element = { user: 'barney', age: 34 };
    const getValue = createIdentifierFn(v => v.user);
    const expected = element.user;
    expect(getValue(element)).toEqual(expected);
  });
  it('should return undefined', () => {
    const element = { user: 'barney', age: 34 };
    const getValue = createIdentifierFn('location');
    const expected = undefined;
    expect(getValue(element)).toEqual(expected);
  });
  it('should return value of identifier 0', () => {
    const element = ['barney', 34];
    const getValue = createIdentifierFn('0');
    const expected = element[0];
    expect(getValue(element)).toEqual(expected);
  });
  it('should return value of identifier "0"', () => {
    const element = ['barney', 34];
    const getValue = createIdentifierFn('0');
    const expected = element[0];
    expect(getValue(element)).toEqual(expected);
  });
  it('should return value of identifier "0"', () => {
    const element = ['barney', 34];
    const getValue = createIdentifierFn(v => v[0]);
    const expected = element[0];
    expect(getValue(element)).toEqual(expected);
  });
  it('should return element', () => {
    const element = ['barney', 34];
    const getValue = createIdentifierFn('user');
    const expected = element;
    expect(getValue(element)).toEqual(expected);
  });
  it('should return null', () => {
    const element = null;
    const getValue = createIdentifierFn('user');
    const expected = element;
    expect(getValue(element)).toEqual(expected);
  });
  it('should return undefined', () => {
    const element = ['barney', 34];
    const getValue = createIdentifierFn('2');
    const expected = undefined;
    expect(getValue(element)).toBe(expected);
  });
});
