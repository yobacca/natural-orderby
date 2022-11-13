import type { CompareOptions } from '../../types';
import { baseCompare } from '../../utils/baseCompare';
import { compare } from '../index';

const defaultOptions: CompareOptions = {
  order: 'asc',
};

jest.mock('../../utils/baseCompare', () => ({
  baseCompare: jest.fn(),
}));

describe('compare()', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  it('should call baseCompare() with default options', () => {
    compare();
    expect(baseCompare).toHaveBeenCalledTimes(1);
    expect(baseCompare).toHaveBeenCalledWith(defaultOptions);
  });
  it('should call baseCompare() with { order: "desc" }', () => {
    const options: CompareOptions = {
      order: 'desc',
    };
    const expectedOptions = {
      ...defaultOptions,
      ...options,
    };
    compare(options);
    expect(baseCompare).toHaveBeenCalledTimes(1);
    expect(baseCompare).toHaveBeenCalledWith(expectedOptions);
  });
});
