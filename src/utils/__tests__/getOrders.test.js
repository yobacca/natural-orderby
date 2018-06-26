// @flow
import getOrders from '../getOrders';

describe('getOrders()', () => {
  describe('valid values', () => {
    it('should return original value, if ["asc"] provided', () => {
      const orders = ['asc'];
      const value = getOrders(orders);
      const expected = orders;
      expect(value).toEqual(expected);
    });
    it('should return array with provided value ("asc")', () => {
      const orders = 'asc';
      const value = getOrders(orders);
      const expected = [orders];
      expect(value).toEqual(expected);
    });
    it('should return original value, if ["desc"] provided', () => {
      const orders = ['desc'];
      const value = getOrders(orders);
      const expected = orders;
      expect(value).toEqual(expected);
    });
    it('should return array with provided value ("desc")', () => {
      const orders = 'desc';
      const value = getOrders(orders);
      const expected = [orders];
      expect(value).toEqual(expected);
    });
    it('should return original value, if array containing a compare function was provided', () => {
      const orders = (a: mixed, b: mixed) => {
        if (typeof a === 'number' && typeof b === 'number') {
          return a - b;
        }
        return 0;
      };
      const value = getOrders(orders);
      const expected = [orders];
      expect(value).toEqual(expected);
    });
    it('should return array with provided value (compare function)', () => {
      const orders = (a: mixed, b: mixed) => {
        if (typeof a === 'number' && typeof b === 'number') {
          return a - b;
        }
        return 0;
      };
      const value = getOrders(orders);
      const expected = [orders];
      expect(value).toEqual(expected);
    });
    it('should return empty array, if null value provided', () => {
      const orders = null;
      const value = getOrders(orders);
      const expected = [];
      expect(value).toEqual(expected);
    });
    it('should return empty array, if undefined provided', () => {
      const orders = undefined;
      const value = getOrders(orders);
      const expected = [];
      expect(value).toEqual(expected);
    });
  });
  describe('invalid values', () => {
    it('should return empty array, if number provided', () => {
      const orders = 1;
      // $FlowInvalidInputTest
      const value = getOrders(orders);
      const expected = [];
      expect(value).toEqual(expected);
    });
    it('should return empty array, if boolean provided', () => {
      const orders = true;
      // $FlowInvalidInputTest
      const value = getOrders(orders);
      const expected = [];
      expect(value).toEqual(expected);
    });
    it('should return empty array, if object provided', () => {
      const orders = {};
      // $FlowInvalidInputTest
      const value = getOrders(orders);
      const expected = [];
      expect(value).toEqual(expected);
    });
    it('should return empty array, if symbol provided', () => {
      const orders = Symbol();
      // $FlowInvalidInputTest
      const value = getOrders(orders);
      const expected = [];
      expect(value).toEqual(expected);
    });
    it('should return empty array, if invalid elements provided', () => {
      const orders = ['asc', 'invalid'];
      // $FlowInvalidInputTest
      const value = getOrders(orders);
      const expected = [];
      expect(value).toEqual(expected);
    });
  });
});
