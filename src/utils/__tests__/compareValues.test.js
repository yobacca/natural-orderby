// @flow
import compareValues from '../compareValues';

describe('compareValues()', () => {
  describe('equal values', () => {
    it('should return 0, if both values are equal numbers', () => {
      const valueA = {
        parsedNumber: 0,
        chunks: [0],
        value: 0,
      };
      const valueB = {
        parsedNumber: 0,
        chunks: [0],
        value: 0,
      };
      expect(compareValues(valueA, valueB)).toBe(0);
    });
    it('should return 0, if both values are equal strings', () => {
      const valueA = {
        chunks: ['a'],
        value: 'a',
      };
      const valueB = {
        chunks: ['a'],
        value: 'a',
      };
      expect(compareValues(valueA, valueB)).toBe(0);
    });
    it('should return 0, if both values are equal booleans (true)', () => {
      const valueA = {
        parsedNumber: 1,
        chunks: [1],
        value: true,
      };
      const valueB = {
        parsedNumber: 1,
        chunks: [1],
        value: true,
      };
      expect(compareValues(valueA, valueB)).toBe(0);
    });
    it('should return 0, if both values are equal booleans (false)', () => {
      const valueA = {
        parsedNumber: 0,
        chunks: [0],
        value: false,
      };
      const valueB = {
        parsedNumber: 0,
        chunks: [0],
        value: false,
      };
      expect(compareValues(valueA, valueB)).toBe(0);
    });
    it('should return 0, if both values are NaN', () => {
      const valueA = {
        isArray: false,
        isFunction: false,
        isNaN: true,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: NaN,
      };
      const valueB = {
        isArray: false,
        isFunction: false,
        isNaN: true,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: NaN,
      };
      expect(compareValues(valueA, valueB)).toBe(0);
    });
    it('should return 0, if both values are Symbol', () => {
      const valueA = {
        isArray: false,
        isFunction: false,
        isNaN: false,
        isNull: false,
        isObject: false,
        isSymbol: true,
        isUndefined: false,
        value: Symbol('foo'),
      };
      const valueB = {
        isArray: false,
        isFunction: false,
        isNaN: false,
        isNull: false,
        isObject: false,
        isSymbol: true,
        isUndefined: false,
        value: Symbol('foo'),
      };
      expect(compareValues(valueA, valueB)).toBe(0);
    });
    it('should return 0, if both values are objects', () => {
      const valueA = {
        isArray: false,
        isFunction: false,
        isNaN: false,
        isNull: false,
        isObject: true,
        isSymbol: false,
        isUndefined: false,
        value: {},
      };
      const valueB = {
        isArray: false,
        isFunction: false,
        isNaN: false,
        isNull: false,
        isObject: true,
        isSymbol: false,
        isUndefined: false,
        value: {},
      };
      expect(compareValues(valueA, valueB)).toBe(0);
    });
    it('should return 0, if both values are arrays', () => {
      const valueA = {
        isArray: true,
        isFunction: false,
        isNaN: false,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: [1, 2],
      };
      const valueB = {
        isArray: true,
        isFunction: false,
        isNaN: false,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: [1, 2],
      };
      expect(compareValues(valueA, valueB)).toBe(0);
    });
    it('should return 0, if both values are functions', () => {
      const valueA = {
        isArray: false,
        isFunction: true,
        isNaN: false,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: function a() {},
      };
      const valueB = {
        isArray: false,
        isFunction: true,
        isNaN: false,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: function b() {
          return 0;
        },
      };
      expect(compareValues(valueA, valueB)).toBe(0);
    });
    it('should return 0, if both values are null', () => {
      const valueA = {
        isArray: false,
        isFunction: false,
        isNaN: false,
        isNull: true,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: null,
      };
      const valueB = {
        isArray: false,
        isFunction: false,
        isNaN: false,
        isNull: true,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: null,
      };
      expect(compareValues(valueA, valueB)).toBe(0);
    });
    it('should return 0, if both values are undefined', () => {
      const valueA = {
        isArray: false,
        isFunction: false,
        isNaN: false,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: true,
        value: undefined,
      };
      const valueB = {
        isArray: false,
        isFunction: false,
        isNaN: false,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: true,
        value: undefined,
      };
      expect(compareValues(valueA, valueB)).toBe(0);
    });
  });
  describe('unequal values', () => {
    it('should call compareNumbers(), if both values are unequal numbers', () => {
      const valueA = {
        parsedNumber: 0,
        chunks: [0],
        value: 0,
      };
      const valueB = {
        parsedNumber: 1,
        chunks: [1],
        value: 1,
      };
      expect(compareValues(valueA, valueB)).not.toBe(0);
    });
    it('should call compareChunks, if both values are unequal strings', () => {
      const valueA = {
        chunks: ['a'],
        value: 'a',
      };
      const valueB = {
        chunks: ['b'],
        value: 'b',
      };
      expect(compareValues(valueA, valueB)).not.toBe(0);
    });
    it('should call compareChunks, if first value is a number and second value is a string', () => {
      const valueA = {
        chunks: [1],
        value: 1,
      };
      const valueB = {
        chunks: ['b'],
        value: 'b',
      };
      expect(compareValues(valueA, valueB)).not.toBe(0);
    });
    it('should call compareChunks, if first value is a string and second value is a number', () => {
      const valueA = {
        chunks: ['b'],
        value: 'b',
      };
      const valueB = {
        chunks: [1],
        value: 1,
      };
      expect(compareValues(valueA, valueB)).not.toBe(0);
    });
    it('should call compareOtherTypes, if first value is a number and second value is NaN', () => {
      const valueA = {
        parsedNumber: 1,
        chunks: [1],
        value: 1,
      };
      const valueB = {
        isArray: false,
        isFunction: false,
        isNaN: true,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: NaN,
      };
      expect(compareValues(valueA, valueB)).not.toBe(0);
    });
    it('should call compareOtherTypes, if first value is NaN and second value is a number', () => {
      const valueA = {
        isArray: false,
        isFunction: false,
        isNaN: true,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: NaN,
      };
      const valueB = {
        parsedNumber: 1,
        chunks: [1],
        value: 1,
      };
      expect(compareValues(valueA, valueB)).not.toBe(0);
    });
    it('should call compareOtherTypes, if first value is a string and second value is NaN', () => {
      const valueA = {
        chunks: ['b'],
        value: 'b',
      };
      const valueB = {
        isArray: false,
        isFunction: false,
        isNaN: true,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: NaN,
      };
      expect(compareValues(valueA, valueB)).not.toBe(0);
    });
    it('should call compareOtherTypes, if first value is NaN and second value is a string', () => {
      const valueA = {
        isArray: false,
        isFunction: false,
        isNaN: true,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: NaN,
      };
      const valueB = {
        chunks: ['b'],
        value: 'b',
      };
      expect(compareValues(valueA, valueB)).not.toBe(0);
    });
    it('should call compareOtherTypes, if first value is a Symbol and second value is an object', () => {
      const valueA = {
        isArray: false,
        isFunction: false,
        isNaN: false,
        isNull: false,
        isObject: false,
        isSymbol: true,
        isUndefined: false,
        value: Symbol(),
      };
      const valueB = {
        isArray: false,
        isFunction: false,
        isNaN: false,
        isNull: false,
        isObject: true,
        isSymbol: false,
        isUndefined: false,
        value: {},
      };
      expect(compareValues(valueA, valueB)).not.toBe(0);
    });
    it('should call compareOtherTypes, if first value is an object and second value is an array', () => {
      const valueA = {
        isArray: false,
        isFunction: false,
        isNaN: false,
        isNull: false,
        isObject: true,
        isSymbol: false,
        isUndefined: false,
        value: {},
      };
      const valueB = {
        isArray: true,
        isFunction: false,
        isNaN: false,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: [],
      };
      expect(compareValues(valueA, valueB)).not.toBe(0);
    });
    it('should call compareOtherTypes, if first value is an array and second value is a function', () => {
      const valueA = {
        isArray: true,
        isFunction: false,
        isNaN: false,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: [],
      };
      const valueB = {
        isArray: false,
        isFunction: true,
        isNaN: false,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: () => {},
      };
      expect(compareValues(valueA, valueB)).not.toBe(0);
    });
    it('should call compareOtherTypes, if first value is a function and second value is null', () => {
      const valueA = {
        isArray: false,
        isFunction: true,
        isNaN: false,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: () => {},
      };
      const valueB = {
        isArray: false,
        isFunction: false,
        isNaN: false,
        isNull: true,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: null,
      };
      expect(compareValues(valueA, valueB)).not.toBe(0);
    });
    it('should call compareOtherTypes, if first value is null and second value is undefined', () => {
      const valueA = {
        isArray: false,
        isFunction: false,
        isNaN: false,
        isNull: true,
        isObject: false,
        isSymbol: false,
        isUndefined: false,
        value: null,
      };
      const valueB = {
        isArray: false,
        isFunction: false,
        isNaN: false,
        isNull: false,
        isObject: false,
        isSymbol: false,
        isUndefined: true,
        value: undefined,
      };
      expect(compareValues(valueA, valueB)).not.toBe(0);
    });
  });
});
