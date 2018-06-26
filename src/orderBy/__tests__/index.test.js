// @flow
/* eslint-disable global-require */
describe('orderBy()', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    jest.mock('../../utils/baseOrderBy', () =>
      jest.fn().mockName('baseOrderBy')
    );
  });

  describe('non-exceptional cases', () => {
    it('should call baseOrderBy() with provided collection argument and an empty array value for identifiers and orders', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = ['Fred', 'barney', 'frank', 'Bob'];
      const identifiers = undefined;
      const orders = undefined;

      orderBy(collection, identifiers, orders);
      expect(baseOrderBy).toHaveBeenCalledTimes(1);
      expect(baseOrderBy).toHaveBeenCalledWith(collection, [], []);
    });
    it('should call baseOrderBy() with provided collection, identifiers and orders arguments', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = ['Fred', 'barney', 'frank', 'Bob'];
      const identifiers = [v => v.toLowerCase()];
      const orders = ['desc'];

      orderBy(collection, identifiers, orders);
      expect(baseOrderBy).toHaveBeenCalledTimes(1);
      expect(baseOrderBy).toHaveBeenCalledWith(collection, identifiers, orders);
    });
  });

  describe('exceptional cases', () => {
    it('should call baseOrderBy() with provided collection argument and an empty array value for identifiers and orders', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = [
        { user: 'Fred', age: 48 },
        { user: 'barney', age: 34 },
        { user: 'fred', age: 40 },
        { user: 'Barney', age: 36 },
      ];
      const identifiers = null;
      const orders = null;

      orderBy(collection, identifiers, orders);
      expect(baseOrderBy).toHaveBeenCalledTimes(1);
      expect(baseOrderBy).toHaveBeenCalledWith(collection, [], []);
    });
    it('should call baseOrderBy() with provided collection argument and an empty array value for identifiers and orders', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = [
        { user: 'Fred', age: 48 },
        { user: 'barney', age: 34 },
        { user: 'fred', age: 40 },
        { user: 'Barney', age: 36 },
      ];
      const identifiers = {};
      const orders = {};

      // $FlowInvalidInputTest
      orderBy(collection, identifiers, orders);
      expect(baseOrderBy).toHaveBeenCalledTimes(1);
      expect(baseOrderBy).toHaveBeenCalledWith(collection, [], []);
    });
    it('should call baseOrderBy() with provided collection argument and an empty array value for identifiers and orders', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = [
        { user: 'Fred', age: 48 },
        { user: 'barney', age: 34 },
        { user: 'fred', age: 40 },
        { user: 'Barney', age: 36 },
      ];
      const identifiers = true;
      const orders = true;

      // $FlowInvalidInputTest
      orderBy(collection, identifiers, orders);
      expect(baseOrderBy).toHaveBeenCalledTimes(1);
      expect(baseOrderBy).toHaveBeenCalledWith(collection, [], []);
    });
    it('should call baseOrderBy() with provided collection argument and an empty array value for identifiers and orders', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = [
        { user: 'Fred', age: 48 },
        { user: 'barney', age: 34 },
        { user: 'fred', age: 40 },
        { user: 'Barney', age: 36 },
      ];
      const identifiers = Symbol();
      const orders = Symbol();

      // $FlowInvalidInputTest
      orderBy(collection, identifiers, orders);
      expect(baseOrderBy).toHaveBeenCalledTimes(1);
      expect(baseOrderBy).toHaveBeenCalledWith(collection, [], []);
    });
    it('should call baseOrderBy() with provided collection and identifiers argument and an empty array value for orders', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = [
        { user: 'Fred', age: 48 },
        { user: 'barney', age: 34 },
        { user: 'fred', age: 40 },
        { user: 'Barney', age: 36 },
      ];
      const identifiers = ['users'];
      const orders = 'abc';

      // $FlowInvalidInputTest
      orderBy(collection, identifiers, orders);
      expect(baseOrderBy).toHaveBeenCalledTimes(1);
      expect(baseOrderBy).toHaveBeenCalledWith(collection, identifiers, []);
    });
    it('should call baseOrderBy() with provided collection and identifiers argument and an empty array value for orders', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = [
        { user: 'Fred', age: 48 },
        { user: 'barney', age: 34 },
        { user: 'fred', age: 40 },
        { user: 'Barney', age: 36 },
      ];
      const identifiers = ['users'];
      const orders = 1;

      // $FlowInvalidInputTest
      orderBy(collection, identifiers, orders);
      expect(baseOrderBy).toHaveBeenCalledTimes(1);
      expect(baseOrderBy).toHaveBeenCalledWith(collection, identifiers, []);
    });
    it('should return an empty array, if collection is null', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = null;
      const identifiers = undefined;
      const orders = undefined;

      // $FlowInvalidInputTest
      const result = orderBy(collection, identifiers, orders);
      expect(baseOrderBy).not.toHaveBeenCalledTimes(1);
      expect(result).toEqual([]);
    });
    it('should return an empty array, if collection is undefined', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = undefined;
      const identifiers = undefined;
      const orders = undefined;

      // $FlowInvalidInputTest
      const result = orderBy(collection, identifiers, orders);
      expect(baseOrderBy).not.toHaveBeenCalledTimes(1);
      expect(result).toEqual([]);
    });
    it('should return an empty array, if collection is boolean', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = true;
      const identifiers = undefined;
      const orders = undefined;

      // $FlowInvalidInputTest
      const result = orderBy(collection, identifiers, orders);
      expect(baseOrderBy).not.toHaveBeenCalledTimes(1);
      expect(result).toEqual([]);
    });
    it('should return an empty array, if collection is a number', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = 1;
      const identifiers = undefined;
      const orders = undefined;

      // $FlowInvalidInputTest
      const result = orderBy(collection, identifiers, orders);
      expect(baseOrderBy).not.toHaveBeenCalledTimes(1);
      expect(result).toEqual([]);
    });
    it('should return an empty array, if collection is a string', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = 'abc';
      const identifiers = undefined;
      const orders = undefined;

      // $FlowInvalidInputTest
      const result = orderBy(collection, identifiers, orders);
      expect(baseOrderBy).not.toHaveBeenCalledTimes(1);
      expect(result).toEqual([]);
    });
    it('should return an empty array, if collection is a object', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = {};
      const identifiers = undefined;
      const orders = undefined;

      // $FlowInvalidInputTest
      const result = orderBy(collection, identifiers, orders);
      expect(baseOrderBy).not.toHaveBeenCalledTimes(1);
      expect(result).toEqual([]);
    });
    it('should return an empty array, if collection is a function', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = () => {};
      const identifiers = undefined;
      const orders = undefined;

      // $FlowInvalidInputTest
      const result = orderBy(collection, identifiers, orders);
      expect(baseOrderBy).not.toHaveBeenCalledTimes(1);
      expect(result).toEqual([]);
    });
    it('should return an empty array, if collection is a symbol', () => {
      const orderBy = require('..').default;
      const baseOrderBy = require('../../utils/baseOrderBy');

      const collection = Symbol();
      const identifiers = undefined;
      const orders = undefined;

      // $FlowInvalidInputTest
      const result = orderBy(collection, identifiers, orders);
      expect(baseOrderBy).not.toHaveBeenCalledTimes(1);
      expect(result).toEqual([]);
    });
  });
});
