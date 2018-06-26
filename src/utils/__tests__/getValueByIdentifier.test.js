// @flow
import getValueByIdentifier from '../getValueByIdentifier';

describe('getValueByIdentifier()', () => {
  it('should return user', () => {
    const element = { user: 'barney', age: 34 };
    const getValue = jest
      .fn()
      .mockImplementation((v: mixed) => v && typeof v === 'object' && v.user)
      .mockName('getValue');
    const value = getValueByIdentifier(element, getValue);
    const expected = element.user;
    expect(value).toEqual(expected);
    expect(getValue).toHaveBeenCalled();
    expect(getValue).toHaveBeenCalledWith(element);
  });
  it('should return element at index 0', () => {
    const element = ['barney', 34];
    const getValue = jest
      .fn()
      .mockImplementation((v: mixed) => v && Array.isArray(v) && v[0])
      .mockName('getValue');
    const value = getValueByIdentifier(element, getValue);
    const expected = element[0];
    expect(value).toEqual(expected);
    expect(getValue).toHaveBeenCalled();
    expect(getValue).toHaveBeenCalledWith(element);
  });
  it('should return element', () => {
    const element = { user: 'barney', age: 34 };
    const getValue = jest
      .fn()
      .mockImplementation(v => v)
      .mockName('getValue');
    const value = getValueByIdentifier(element, getValue);
    const expected = element;
    expect(value).toEqual(expected);
    expect(getValue).toHaveBeenCalled();
    expect(getValue).toHaveBeenCalledWith(element);
  });
  it('should return element', () => {
    const element = ['barney', 34];
    const getValue = jest
      .fn()
      .mockImplementation(v => v)
      .mockName('getValue');
    const value = getValueByIdentifier(element, getValue);
    const expected = element;
    expect(value).toEqual(expected);
    expect(getValue).toHaveBeenCalled();
    expect(getValue).toHaveBeenCalledWith(element);
  });
});
