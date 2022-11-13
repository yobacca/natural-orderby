import { compareOtherTypes } from '../compareOtherTypes';

describe('compareOtherTypes()', () => {
  it('should return -1, if the first value is a string and the second value is an array, object, function, NaN, Symbol, null or undefined', () => {
    const valueA = {
      chunks: [{ parsedNumber: undefined, normalizedString: 'a' }],
      value: 'a',
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
    expect(compareOtherTypes(valueA, valueB)).toBeLessThan(0);
  });
  it('should return 0, if both values are strings', () => {
    const valueA = {
      chunks: [{ parsedNumber: undefined, normalizedString: 'a' }],
      value: 'a',
    };
    const valueB = {
      chunks: [{ parsedNumber: undefined, normalizedString: 'b' }],
      value: 'b',
    };
    expect(compareOtherTypes(valueA, valueB)).toBe(0);
  });
  it('should return 1, if the first value is an array, object, function, NaN, Symbol, null or undefined and the second value is a string', () => {
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
      chunks: [{ parsedNumber: undefined, normalizedString: 'a' }],
      value: 'a',
    };
    expect(compareOtherTypes(valueA, valueB)).toBeGreaterThan(0);
  });
  it('should return -1, if the first value is NaN and the second value is an array, object, function, Symbol, null or undefined', () => {
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
      isNaN: false,
      isNull: false,
      isObject: false,
      isSymbol: true,
      isUndefined: false,
      value: Symbol(),
    };
    expect(compareOtherTypes(valueA, valueB)).toBeLessThan(0);
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
    expect(compareOtherTypes(valueA, valueB)).toBe(0);
  });
  it('should return 1, if the first value is an array, object, function, Symbol, null or undefined and the second value is NaN', () => {
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
      isNaN: true,
      isNull: false,
      isObject: false,
      isSymbol: false,
      isUndefined: false,
      value: NaN,
    };
    expect(compareOtherTypes(valueA, valueB)).toBeGreaterThan(0);
  });
  it('should return -1, if the first value is a Symbol and the second value is an array, object, function, null or undefined', () => {
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
    expect(compareOtherTypes(valueA, valueB)).toBeLessThan(0);
  });
  it('should return 0, if both values are a Symbol', () => {
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
      isObject: false,
      isSymbol: true,
      isUndefined: false,
      value: Symbol(),
    };
    expect(compareOtherTypes(valueA, valueB)).toBe(0);
  });
  it('should return 1, if the first value is an array, object, function, null or undefined and the second value is a Symbol', () => {
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
      isObject: false,
      isSymbol: true,
      isUndefined: false,
      value: Symbol(),
    };
    expect(compareOtherTypes(valueA, valueB)).toBeGreaterThan(0);
  });
  it('should return -1, if the first value is an object and the second value is an array, function, null or undefined', () => {
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
    expect(compareOtherTypes(valueA, valueB)).toBeLessThan(0);
  });
  it('should return 0, if both values are an object', () => {
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
      value: { a: 1 },
    };
    expect(compareOtherTypes(valueA, valueB)).toBe(0);
  });
  it('should return 1, if the first value is an array, function, null or undefined and the second value is an object', () => {
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
      isFunction: false,
      isNaN: false,
      isNull: false,
      isObject: true,
      isSymbol: false,
      isUndefined: false,
      value: {},
    };
    expect(compareOtherTypes(valueA, valueB)).toBeGreaterThan(0);
  });
  it('should return -1, if the first value is an array and the second value is an function, null or undefined', () => {
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
      value: (): void => {
        return;
      },
    };
    expect(compareOtherTypes(valueA, valueB)).toBeLessThan(0);
  });
  it('should return 0, if both values are an array', () => {
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
      isArray: true,
      isFunction: false,
      isNaN: false,
      isNull: false,
      isObject: false,
      isSymbol: false,
      isUndefined: false,
      value: [1, 2],
    };
    expect(compareOtherTypes(valueA, valueB)).toBe(0);
  });
  it('should return 1, if the first value is a function, null or undefined and the second value is an array', () => {
    const valueA = {
      isArray: false,
      isFunction: true,
      isNaN: false,
      isNull: false,
      isObject: false,
      isSymbol: false,
      isUndefined: false,
      value: (): void => {
        return;
      },
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
    expect(compareOtherTypes(valueA, valueB)).toBeGreaterThan(0);
  });
  it('should return -1, if the first value is a function and the second value is null or undefined', () => {
    const valueA = {
      isArray: false,
      isFunction: true,
      isNaN: false,
      isNull: false,
      isObject: false,
      isSymbol: false,
      isUndefined: false,
      value: (): void => {
        return;
      },
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
    expect(compareOtherTypes(valueA, valueB)).toBeLessThan(0);
  });
  it('should return 0, if both values are a function', () => {
    const valueA = {
      isArray: false,
      isFunction: true,
      isNaN: false,
      isNull: false,
      isObject: false,
      isSymbol: false,
      isUndefined: false,
      value: (): void => {
        return;
      },
    };
    const valueB = {
      isArray: false,
      isFunction: true,
      isNaN: false,
      isNull: false,
      isObject: false,
      isSymbol: false,
      isUndefined: false,
      value: function a(): void {
        return;
      },
    };
    expect(compareOtherTypes(valueA, valueB)).toBe(0);
  });
  it('should return 1, if the first value is null or undefined and the second value is a function', () => {
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
      isFunction: true,
      isNaN: false,
      isNull: false,
      isObject: false,
      isSymbol: false,
      isUndefined: false,
      value: (): void => {
        return;
      },
    };
    expect(compareOtherTypes(valueA, valueB)).toBeGreaterThan(0);
  });
  it('should return -1, if the first value is null and the second value is undefined', () => {
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
    expect(compareOtherTypes(valueA, valueB)).toBeLessThan(0);
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
    expect(compareOtherTypes(valueA, valueB)).toBe(0);
  });
  it('should return 1, if the first value is undefined and the second value is null', () => {
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
      isNull: true,
      isObject: false,
      isSymbol: false,
      isUndefined: false,
      value: null,
    };
    expect(compareOtherTypes(valueA, valueB)).toBeGreaterThan(0);
  });
});
