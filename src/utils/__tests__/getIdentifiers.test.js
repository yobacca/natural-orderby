// @flow
import getIdentifiers from '../getIdentifiers';

describe('getIdentifiers()', () => {
  describe('valid values', () => {
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
      const expected = [];
      expect(value).toEqual(expected);
    });
    it('should return empty array, if undefined provided', () => {
      const identifiers = undefined;
      const value = getIdentifiers(identifiers);
      const expected = [];
      expect(value).toEqual(expected);
    });
  });
  describe('invalid values', () => {
    it('should return empty array, if object provided', () => {
      const identifiers = {};
      // $FlowInvalidInputTest
      const value = getIdentifiers(identifiers);
      const expected = [];
      expect(value).toEqual(expected);
    });
    it('should return empty array, if symbol provided', () => {
      const identifiers = Symbol();
      // $FlowInvalidInputTest
      const value = getIdentifiers(identifiers);
      const expected = [];
      expect(value).toEqual(expected);
    });
    it('should return empty array, if boolean provided', () => {
      const identifiers = true;
      // $FlowInvalidInputTest
      const value = getIdentifiers(identifiers);
      const expected = [];
      expect(value).toEqual(expected);
    });
    it('should return empty array, if one element has invalid type', () => {
      const identifiers = [[1]];
      // $FlowInvalidInputTest
      const value = getIdentifiers(identifiers);
      const expected = [];
      expect(value).toEqual(expected);
    });
    it('should return empty array, if one element has invalid type', () => {
      const identifiers = [{ a: 1 }];
      // $FlowInvalidInputTest
      const value = getIdentifiers(identifiers);
      const expected = [];
      expect(value).toEqual(expected);
    });
    it('should return empty array, if one element has invalid type', () => {
      const identifiers = [undefined];
      // $FlowInvalidInputTest
      const value = getIdentifiers(identifiers);
      const expected = [];
      expect(value).toEqual(expected);
    });
    it('should return empty array, if one element has invalid type', () => {
      const identifiers = [null];
      // $FlowInvalidInputTest
      const value = getIdentifiers(identifiers);
      const expected = [];
      expect(value).toEqual(expected);
    });
    it('should return empty array, if one element has invalid type', () => {
      const identifiers = [Symbol()];
      // $FlowInvalidInputTest
      const value = getIdentifiers(identifiers);
      const expected = [];
      expect(value).toEqual(expected);
    });
    it('should return empty array, if one element has invalid type', () => {
      const identifiers = [true];
      // $FlowInvalidInputTest
      const value = getIdentifiers(identifiers);
      const expected = [];
      expect(value).toEqual(expected);
    });
  });
});
