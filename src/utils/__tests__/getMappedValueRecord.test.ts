/* eslint-disable no-new-wrappers */
import { getMappedValueRecord } from '../getMappedValueRecord';

describe('getMappedValueRecord()', () => {
  it('should call stringify(), numberify() and createChunksList() and return record for a numeric value', () => {
    const value = 100;
    const received = getMappedValueRecord(value);
    const expected = {
      parsedNumber: 100,
      chunks: [{ parsedNumber: 100, normalizedString: '100' }],
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should call stringify(), numberify() and createChunksList() and return record for a numeric value (0)', () => {
    const value = 0;
    const received = getMappedValueRecord(value);
    const expected = {
      parsedNumber: 0,
      chunks: [{ parsedNumber: 0, normalizedString: '0' }],
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should call stringify(), numberify() and createChunksList() and return record for a string value containing a number', () => {
    const value = '100';
    const received = getMappedValueRecord(value);
    const expected = {
      parsedNumber: 100,
      chunks: [{ parsedNumber: 100, normalizedString: '100' }],
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should call stringify(), numberify() and createChunksList() and return record for an instance of Number', () => {
    const value = new Number(100);
    const received = getMappedValueRecord(value);
    const expected = {
      parsedNumber: 100,
      chunks: [{ parsedNumber: 100, normalizedString: '100' }],
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should call stringify(), numberify() and createChunksList() and return record for a Date value', () => {
    const value = new Date('12 June 2018 22:25 UTC');
    const received = getMappedValueRecord(value);
    const expected = {
      chunks: [
        { parsedNumber: 1528842300000, normalizedString: '1528842300000' },
      ],
      parsedNumber: 1528842300000,
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should call stringify(), numberify() and createChunksList() and return record for a string value containing a date', () => {
    const date = new Date('12 June 2018 22:25 UTC');
    const value = date.toISOString();
    const received = getMappedValueRecord(value);
    const expected = {
      parsedNumber: 1528842300000,
      chunks: [
        { parsedNumber: 1528842300000, normalizedString: '1528842300000' },
      ],
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should call stringify(), numberify() and createChunksList() and return a record containing original value for a boolean value (true)', () => {
    const value = true;
    const received = getMappedValueRecord(value);
    const expected = {
      parsedNumber: 1,
      chunks: [{ parsedNumber: 1, normalizedString: '1' }],
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should call stringify(), numberify() and createChunksList() and return a record containing original value for a boolean value (false)', () => {
    const value = false;
    const received = getMappedValueRecord(value);
    const expected = {
      parsedNumber: 0,
      chunks: [{ parsedNumber: 0, normalizedString: '0' }],
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should call stringify(), numberify() and createChunksList() and return record for a string value containing only characters', () => {
    const value = 'abc';
    const received = getMappedValueRecord(value);
    const expected = {
      chunks: [{ parsedNumber: undefined, normalizedString: 'abc' }],
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should call stringify(), numberify() and createChunksList() and return record for an instance of String', () => {
    const value = new String('abc');
    const received = getMappedValueRecord(value);
    const expected = {
      chunks: [{ parsedNumber: undefined, normalizedString: value.toString() }],
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should call stringify(), numberify() and createChunksList() and return record for a string value containing numbers and characters', () => {
    const value = 'abc100';
    const received = getMappedValueRecord(value);
    const expected = {
      chunks: [
        { parsedNumber: undefined, normalizedString: 'abc' },
        { parsedNumber: 100, normalizedString: '100' },
      ],
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should not call stringify(), numberify() and createChunksList() and return a record containing original value for a null value', () => {
    const value = null;
    const received = getMappedValueRecord(value);
    const expected = {
      isArray: false,
      isFunction: false,
      isNaN: false,
      isNull: true,
      isObject: false,
      isSymbol: false,
      isUndefined: false,
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should not call stringify(), numberify() and createChunksList() and return a record containing original value for an undefined value', () => {
    const value = undefined;
    const received = getMappedValueRecord(value);
    const expected = {
      isArray: false,
      isFunction: false,
      isNaN: false,
      isNull: false,
      isObject: false,
      isSymbol: false,
      isUndefined: true,
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should not call stringify(), numberify() and createChunksList() and return a record containing original value for an object value', () => {
    const value = { a: 1, b: 2 };
    const received = getMappedValueRecord(value);
    const expected = {
      isArray: false,
      isFunction: false,
      isNaN: false,
      isNull: false,
      isObject: true,
      isSymbol: false,
      isUndefined: false,
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should not call stringify(), numberify() and createChunksList() and return a record containing original value for an array value', () => {
    const value = [1, 2, 3];
    const received = getMappedValueRecord(value);
    const expected = {
      isArray: true,
      isFunction: false,
      isNaN: false,
      isNull: false,
      isObject: false,
      isSymbol: false,
      isUndefined: false,
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should not call stringify(), numberify() and createChunksList() and return a record containing original value for a function value', () => {
    const value = (): void => {
      return;
    };
    const received = getMappedValueRecord(value);
    const expected = {
      isArray: false,
      isFunction: true,
      isNaN: false,
      isNull: false,
      isObject: false,
      isSymbol: false,
      isUndefined: false,
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should not call stringify(), numberify() and createChunksList() and return a record containing original value for a NaN value', () => {
    const value = Number.NaN;
    const received = getMappedValueRecord(value);
    const expected = {
      isArray: false,
      isFunction: false,
      isNaN: true,
      isNull: false,
      isObject: false,
      isSymbol: false,
      isUndefined: false,
      value,
    };
    expect(received).toEqual(expected);
  });
  it('should not call stringify(), numberify() and createChunksList() and return a record containing original value for a Symbol value', () => {
    const value = Symbol();
    const received = getMappedValueRecord(value);
    const expected = {
      isArray: false,
      isFunction: false,
      isNaN: false,
      isNull: false,
      isObject: false,
      isSymbol: true,
      isUndefined: false,
      value,
    };
    expect(received).toEqual(expected);
  });
});
