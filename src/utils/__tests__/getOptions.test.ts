import type { CompareOptions } from '../../types';
import { getOptions } from '../getOptions';

const defaultOptions: CompareOptions = {
  order: 'asc',
  locale: undefined,
};

describe('getOptions()', () => {
  it('should return custom options, if argument is object', () => {
    const customOptions: CompareOptions = { order: 'desc', locale: 'de' };
    const options = getOptions(customOptions);
    const expected = customOptions;
    expect(options).toEqual(expected);
  });
  it('should return custom options, if argument is a string', () => {
    const customOptions = 'desc';
    const options = getOptions(customOptions);
    const expected = { ...defaultOptions, order: customOptions };
    expect(options).toEqual(expected);
  });
  it('should return default options, if argument is undefined', () => {
    const options = getOptions();
    const expected = defaultOptions;
    expect(options).toEqual(expected);
  });
  it('should return default options, if argument is empty object', () => {
    const options = getOptions({});
    const expected = defaultOptions;
    expect(options).toEqual(expected);
  });
});
