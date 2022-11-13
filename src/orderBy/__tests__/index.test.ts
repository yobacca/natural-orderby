import type { Order } from '../../types';
import { baseOrderBy } from '../../utils/baseOrderBy';
import { orderBy } from '../index';

jest.mock('../../utils/baseOrderBy', () => ({
  baseOrderBy: jest.fn(),
}));

describe('orderBy()', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  it('should call baseOrderBy() with provided collection argument and an empty array value for identifiers and orders', () => {
    const collection = ['Fred', 'barney', 'frank', 'Bob'];
    const identifiers = undefined;
    const orders = undefined;

    orderBy(collection, identifiers, orders);
    expect(baseOrderBy).toHaveBeenCalledTimes(1);
    expect(baseOrderBy).toHaveBeenCalledWith(collection, [], []);
  });
  it('should call baseOrderBy() with provided collection, identifiers and orders arguments', () => {
    const collection = ['Fred', 'barney', 'frank', 'Bob'];
    const identifiers = [(v: string) => v.toLowerCase()];
    const orders: Array<Order> = ['desc'];

    orderBy(collection, identifiers, orders);
    expect(baseOrderBy).toHaveBeenCalledTimes(1);
    expect(baseOrderBy).toHaveBeenCalledWith(collection, identifiers, orders);
  });
});
