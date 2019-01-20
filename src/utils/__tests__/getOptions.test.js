// @flow
import getOptions from '../getOptions';

const defaultOptions = {
  order: 'asc',
};

describe('getOptions()', () => {
  describe('valid options', () => {
    it('should return custom options, if argument is object', () => {
      const customOptions = { order: 'desc' };
      const options = getOptions(customOptions);
      const expected = customOptions;
      expect(options).toEqual(expected);
    });
    it('should return custom options, if argument is a string', () => {
      const customOptions = 'desc';
      const options = getOptions(customOptions);
      const expected = { order: customOptions };
      expect(options).toEqual(expected);
    });
    it('should return default options, if argument is undefined', () => {
      const options = getOptions();
      const expected = defaultOptions;
      expect(options).toEqual(expected);
    });
    it('should return default options, if argument is empty object', () => {
      const options = getOptions({});
      const expected = defaultOptions;
      expect(options).toEqual(expected);
    });
  });
  describe('invalid options', () => {
    it('should return { caseSensitive: true, order: "asc" }', () => {
      const customOptions = { order: 'abc' };
      // $FlowInvalidInputTest
      const options = getOptions(customOptions);
      const expected = defaultOptions;
      expect(options).toEqual(expected);
    });
    it('should return { caseSensitive: true, order: "asc" }', () => {
      const customOptions = { order: true };
      // $FlowInvalidInputTest
      const options = getOptions(customOptions);
      const expected = defaultOptions;
      expect(options).toEqual(expected);
    });
    it('should return { caseSensitive: true, order: "asc" }', () => {
      const customOptions = { order: 1 };
      // $FlowInvalidInputTest
      const options = getOptions(customOptions);
      const expected = defaultOptions;
      expect(options).toEqual(expected);
    });
    it('should return { caseSensitive: true, order: "asc" }', () => {
      const customOptions = { order: {} };
      // $FlowInvalidInputTest
      const options = getOptions(customOptions);
      const expected = defaultOptions;
      expect(options).toEqual(expected);
    });
    it('should return { caseSensitive: true, order: "asc" }', () => {
      const customOptions = { order: () => {} };
      // $FlowInvalidInputTest
      const options = getOptions(customOptions);
      const expected = defaultOptions;
      expect(options).toEqual(expected);
    });
    it('should return { caseSensitive: true, order: "asc" }', () => {
      const customOptions = { order: Symbol() };
      // $FlowInvalidInputTest
      const options = getOptions(customOptions);
      const expected = defaultOptions;
      expect(options).toEqual(expected);
    });
    it('should return { caseSensitive: true, order: "asc" }', () => {
      const customOptions = { order: null };
      // $FlowInvalidInputTest
      const options = getOptions(customOptions);
      const expected = defaultOptions;
      expect(options).toEqual(expected);
    });
    it('should return default options, if argument is null', () => {
      // $FlowInvalidInputTest
      const options = getOptions(null);
      const expected = defaultOptions;
      expect(options).toEqual(expected);
    });
    it('should return default options, if argument is an object with unknown properties', () => {
      // $FlowInvalidInputTest
      const options = getOptions({ a: 1, b: 2, c: 3 });
      const expected = defaultOptions;
      expect(options).toEqual(expected);
    });
    it('should return default options, if argument is an invalid string', () => {
      // $FlowInvalidInputTest
      const options = getOptions('abc');
      const expected = defaultOptions;
      expect(options).toEqual(expected);
    });
    it('should return default options, if argument is a number', () => {
      // $FlowInvalidInputTest
      const options = getOptions(123);
      const expected = defaultOptions;
      expect(options).toEqual(expected);
    });
    it('should return default options, if argument is a function', () => {
      // $FlowInvalidInputTest
      const options = getOptions(() => {});
      const expected = defaultOptions;
      expect(options).toEqual(expected);
    });
    it('should return default options, if argument is a symbol', () => {
      // $FlowInvalidInputTest
      const options = getOptions(Symbol());
      const expected = defaultOptions;
      expect(options).toEqual(expected);
    });
  });
});
