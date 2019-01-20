// @flow
/* eslint-disable global-require */
const defaultOptions = {
  order: 'asc',
};

describe('compare()', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();

    jest.mock('../../utils/baseCompare', () =>
      jest.fn().mockName('baseCompare')
    );
  });

  it('should call baseCompare() with default options', () => {
    const compare = require('..').default;
    const baseCompare = require('../../utils/baseCompare');
    compare();
    expect(baseCompare).toHaveBeenCalledTimes(1);
    expect(baseCompare).toHaveBeenCalledWith(defaultOptions);
  });
  it('should call baseCompare() with { order: "desc" } ', () => {
    const compare = require('..').default;
    const baseCompare = require('../../utils/baseCompare');
    const options = {
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
