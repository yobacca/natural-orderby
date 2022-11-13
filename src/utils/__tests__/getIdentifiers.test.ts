import type { Identifier } from '../../types';
import { getIdentifiers } from '../getIdentifiers';

describe('getIdentifiers()', () => {
  it('should return original value, if valid value provided', () => {
    const identifiers = ['user'];
    const value = getIdentifiers(identifiers);
    const expected = identifiers;
    expect(value).toEqual(expected);
  });
  it('should return array with provided value, if value was a string', () => {
    const identifiers = 'user';
    const value = getIdentifiers(identifiers);
    const expected = [identifiers];
    expect(value).toEqual(expected);
  });
  it('should return array with provided value, if value was a number', () => {
    const identifiers = '1';
    const value = getIdentifiers(identifiers);
    const expected = [identifiers];
    expect(value).toEqual(expected);
  });
  it('should return array with provided value, if value was a function', () => {
    const identifiers = (v: string): string => v;
    const value = getIdentifiers(identifiers);
    const expected = [identifiers];
    expect(value).toEqual(expected);
  });
  it('should return empty array, if null value provided', () => {
    const identifiers = null;
    const value = getIdentifiers(identifiers);
    const expected: Array<Identifier<undefined>> = [];
    expect(value).toEqual(expected);
  });
  it('should return empty array, if undefined provided', () => {
    const identifiers = undefined;
    const value = getIdentifiers(identifiers);
    const expected: Array<Identifier<undefined>> = [];
    expect(value).toEqual(expected);
  });
});
