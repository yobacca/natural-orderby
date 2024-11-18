import { compareMultiple } from '../compareMultiple';

describe('compareMultiple()', () => {
  describe('default order', () => {
    it('should call compareValues() and return result without changing order (1)', () => {
      const recordA = {
        index: 0,
        values: [
          {
            parsedNumber: 0,
            chunks: [{ parsedNumber: 0, normalizedString: '0' }],
            value: 0,
          },
        ],
      };
      const recordB = {
        index: 1,
        values: [
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      expect(compareMultiple(recordA, recordB, [])).toBeLessThan(0);
    });
    it('should call compareValues() and return result without changing order (2)', () => {
      const recordA = {
        index: 0,
        values: [
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      const recordB = {
        index: 1,
        values: [
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      expect(compareMultiple(recordA, recordB, [])).toBeLessThan(0);
    });
    it('should call compareValues() and return result without changing order (3)', () => {
      const recordA = {
        index: 0,
        values: [
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      const recordB = {
        index: 1,
        values: [
          {
            parsedNumber: 0,
            chunks: [{ parsedNumber: 0, normalizedString: '0' }],
            value: 0,
          },
        ],
      };
      expect(compareMultiple(recordA, recordB, [])).toBeGreaterThan(0);
    });
  });
  describe('ascending order', () => {
    it('should call compareValues() and return result without changing order (4)', () => {
      const recordA = {
        index: 0,
        values: [
          {
            parsedNumber: 0,
            chunks: [{ parsedNumber: 0, normalizedString: '0' }],
            value: 0,
          },
        ],
      };
      const recordB = {
        index: 1,
        values: [
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      expect(compareMultiple(recordA, recordB, ['asc'])).toBeLessThan(0);
    });
    it('should call compareValues() and return result without changing order (5)', () => {
      const recordA = {
        index: 0,
        values: [
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      const recordB = {
        index: 1,
        values: [
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      expect(compareMultiple(recordA, recordB, ['asc'])).toBeLessThan(0);
    });
    it('should call compareValues() and return result without changing order (6)', () => {
      const recordA = {
        index: 0,
        values: [
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      const recordB = {
        index: 1,
        values: [
          {
            parsedNumber: 0,
            chunks: [{ parsedNumber: 0, normalizedString: '0' }],
            value: 0,
          },
        ],
      };
      expect(compareMultiple(recordA, recordB, ['asc'])).toBeGreaterThan(0);
    });
  });
  describe('descending order', () => {
    it('should call compareValues() and return result changed to descending order (7)', () => {
      const recordA = {
        index: 0,
        values: [
          {
            parsedNumber: 0,
            chunks: [{ parsedNumber: 0, normalizedString: '0' }],
            value: 0,
          },
        ],
      };
      const recordB = {
        index: 1,
        values: [
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      expect(compareMultiple(recordA, recordB, ['desc'])).toBeGreaterThan(0);
    });
    it('should call compareValues() and return result without changing (8)', () => {
      const recordA = {
        index: 0,
        values: [
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      const recordB = {
        index: 1,
        values: [
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      expect(compareMultiple(recordA, recordB, ['desc'])).toBeLessThan(0);
    });
    it('should call compareValues() and return result changed to descending order (9)', () => {
      const recordA = {
        index: 0,
        values: [
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      const recordB = {
        index: 1,
        values: [
          {
            parsedNumber: 0,
            chunks: [{ parsedNumber: 0, normalizedString: '0' }],
            value: 0,
          },
        ],
      };
      expect(compareMultiple(recordA, recordB, ['desc'])).toBeLessThan(0);
    });
  });
  describe('mixed order', () => {
    it('should call compareValues() twice and return result without changing order (10)', () => {
      const recordA = {
        index: 0,
        values: [
          {
            chunks: [{ parsedNumber: undefined, normalizedString: 'a' }],
            value: 'a',
          },
          {
            parsedNumber: 0,
            chunks: [{ parsedNumber: 0, normalizedString: '0' }],
            value: 0,
          },
        ],
      };
      const recordB = {
        index: 1,
        values: [
          {
            chunks: [{ parsedNumber: undefined, normalizedString: 'a' }],
            value: 'a',
          },
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      expect(compareMultiple(recordA, recordB, ['desc', 'asc'])).toBeLessThan(
        0,
      );
    });
    it('should call compareValues() twice and return result without changing order (11)', () => {
      const recordA = {
        index: 0,
        values: [
          {
            chunks: [{ parsedNumber: undefined, normalizedString: 'a' }],
            value: 'a',
          },
          {
            parsedNumber: 0,
            chunks: [{ parsedNumber: 0, normalizedString: '0' }],
            value: 0,
          },
        ],
      };
      const recordB = {
        index: 1,
        values: [
          {
            chunks: [{ parsedNumber: undefined, normalizedString: 'a' }],
            value: 'a',
          },
          {
            parsedNumber: 0,
            chunks: [{ parsedNumber: 0, normalizedString: '0' }],
            value: 0,
          },
        ],
      };
      expect(compareMultiple(recordA, recordB, ['desc', 'asc'])).toBeLessThan(
        0,
      );
    });
    it('should call compareValues() twice and return result without changing order (12)', () => {
      const recordA = {
        index: 0,
        values: [
          {
            chunks: [{ parsedNumber: undefined, normalizedString: 'a' }],
            value: 'a',
          },
          {
            parsedNumber: 0,
            chunks: [{ parsedNumber: 0, normalizedString: '0' }],
            value: 0,
          },
        ],
      };
      const recordB = {
        index: 1,
        values: [
          {
            chunks: [{ parsedNumber: undefined, normalizedString: 'a' }],
            value: 'a',
          },
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      expect(
        compareMultiple(recordA, recordB, ['asc', 'desc']),
      ).toBeGreaterThan(0);
    });
  });
  describe('order function', () => {
    it('should call compareValues() and order() once and return result of order()', () => {
      const order = jest.fn().mockReturnValue(-1);
      const recordA = {
        index: 0,
        values: [
          {
            chunks: [{ parsedNumber: undefined, normalizedString: 'a' }],
            value: 'a',
          },
          {
            parsedNumber: 0,
            chunks: [{ parsedNumber: 0, normalizedString: '0' }],
            value: 0,
          },
        ],
      };
      const recordB = {
        index: 1,
        values: [
          {
            chunks: [{ parsedNumber: undefined, normalizedString: 'a' }],
            value: 'a',
          },
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      expect(compareMultiple(recordA, recordB, ['desc', order])).toBeLessThan(
        0,
      );
      expect(order).toHaveBeenCalledTimes(1);
      expect(order).toHaveBeenCalledWith(
        recordA.values[1].value,
        recordB.values[1].value,
      );
    });
    it('should call order() and compareValues() once and return result of compareValues()', () => {
      const order = jest.fn().mockReturnValue(0);
      const recordA = {
        index: 0,
        values: [
          {
            chunks: [{ parsedNumber: undefined, normalizedString: 'a' }],
            value: 'a',
          },
          {
            parsedNumber: 0,
            chunks: [{ parsedNumber: 0, normalizedString: '0' }],
            value: 0,
          },
        ],
      };
      const recordB = {
        index: 1,
        values: [
          {
            chunks: [{ parsedNumber: undefined, normalizedString: 'a' }],
            value: 'a',
          },
          {
            parsedNumber: 1,
            chunks: [{ parsedNumber: 1, normalizedString: '1' }],
            value: 1,
          },
        ],
      };
      expect(compareMultiple(recordA, recordB, [order, 'asc'])).toBeLessThan(0);
      expect(order).toHaveBeenCalledTimes(1);
      expect(order).toHaveBeenCalledWith(
        recordA.values[0].value,
        recordB.values[0].value,
      );
    });
  });
});
