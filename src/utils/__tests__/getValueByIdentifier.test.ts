import { getValueByIdentifier } from '../getValueByIdentifier';

type UserObj = {
  user: string;
  age: number;
};
type UserArr = Array<string | number>;

describe('getValueByIdentifier()', () => {
  it('should return user', () => {
    const element: UserObj = { user: 'barney', age: 34 };
    const getValue = jest
      .fn()
      .mockImplementation((v: UserObj) => v.user)
      .mockName('getValue');
    const value = getValueByIdentifier(element, getValue);
    const expected = element.user;
    expect(value).toEqual(expected);
    expect(getValue).toHaveBeenCalled();
    expect(getValue).toHaveBeenCalledWith(element);
  });
  it('should return element at index 0', () => {
    const element: UserArr = ['barney', 34];
    const getValue = jest
      .fn()
      .mockImplementation((v: UserArr) => v[0])
      .mockName('getValue');
    const value = getValueByIdentifier(element, getValue);
    const expected = element[0];
    expect(value).toEqual(expected);
    expect(getValue).toHaveBeenCalled();
    expect(getValue).toHaveBeenCalledWith(element);
  });
  it('should return element object', () => {
    const element: UserObj = { user: 'barney', age: 34 };
    const getValue = jest
      .fn()
      .mockImplementation((v) => v)
      .mockName('getValue');
    const value = getValueByIdentifier(element, getValue);
    const expected = element;
    expect(value).toEqual(expected);
    expect(getValue).toHaveBeenCalled();
    expect(getValue).toHaveBeenCalledWith(element);
  });
  it('should return element array', () => {
    const element: UserArr = ['barney', 34];
    const getValue = jest
      .fn()
      .mockImplementation((v) => v)
      .mockName('getValue');
    const value = getValueByIdentifier(element, getValue);
    const expected = element;
    expect(value).toEqual(expected);
    expect(getValue).toHaveBeenCalled();
    expect(getValue).toHaveBeenCalledWith(element);
  });
});
