import { createIdentifierFn } from '../createIdentifierFn';

type UserObj = {
  user: string;
  age: number;
};
type UserArr = Array<string | number>;

describe('createIdentifierFn()', () => {
  it('should return value of identifier "user"', () => {
    const element: UserObj = { user: 'barney', age: 34 };
    const getValue = createIdentifierFn('user');
    const expected = element.user;
    expect(getValue(element)).toEqual(expected);
  });
  it('should return value of function identifier for "user"', () => {
    const element: UserObj = { user: 'barney', age: 34 };
    const getValue = createIdentifierFn<UserObj>((v) => v.user);
    const expected = element.user;
    expect(getValue(element)).toEqual(expected);
  });
  it('should return undefined for non-existing object key', () => {
    const element: UserObj = { user: 'barney', age: 34 };
    const getValue = createIdentifierFn('location');
    const expected = undefined;
    expect(getValue(element)).toEqual(expected);
  });
  it('should return value of identifier 0', () => {
    const element: UserArr = ['barney', 34];
    const getValue = createIdentifierFn('0');
    const expected = element[0];
    expect(getValue(element)).toEqual(expected);
  });
  it('should return value of identifier "0"', () => {
    const element: UserArr = ['barney', 34];
    const getValue = createIdentifierFn('0');
    const expected = element[0];
    expect(getValue(element)).toEqual(expected);
  });
  it('should return value of function identifier for "0"', () => {
    const element: UserArr = ['barney', 34];
    const getValue = createIdentifierFn<UserArr>((v) => v[0]);
    const expected = element[0];
    expect(getValue(element)).toEqual(expected);
  });
  it('should return element', () => {
    const element: UserArr = ['barney', 34];
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
  it('should return undefined for non-existing array index', () => {
    const element: UserArr = ['barney', 34];
    const getValue = createIdentifierFn('2');
    const expected = undefined;
    expect(getValue(element)).toBe(expected);
  });
});
