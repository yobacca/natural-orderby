import type { Order } from '../types';

export const getOrders = (
  orders?: ReadonlyArray<Order> | Order | null
): Array<Order> => {
  if (!orders) {
    return [];
  }
  const orderList = !Array.isArray(orders) ? [orders] : [...orders];
  if (
    orderList.some(
      (order) =>
        order !== 'asc' && order !== 'desc' && typeof order !== 'function'
    )
  ) {
    return [];
  }
  return orderList;
};
