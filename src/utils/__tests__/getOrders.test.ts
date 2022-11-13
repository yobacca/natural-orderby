import type { Order } from '../../types';
import { getOrders } from '../getOrders';

describe('getOrders()', () => {
  it('should return original value, if ["asc"] provided', () => {
    const orders: Array<Order> = ['asc'];
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
    const orders: Array<Order> = ['desc'];
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
    const orders: Order = (a: unknown, b: unknown) => {
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
    const orders: Order = (a: unknown, b: unknown) => {
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
    const expected: Array<Order> = [];
    expect(value).toEqual(expected);
  });
  it('should return empty array, if undefined provided', () => {
    const orders = undefined;
    const value = getOrders(orders);
    const expected: Array<Order> = [];
    expect(value).toEqual(expected);
  });
});
