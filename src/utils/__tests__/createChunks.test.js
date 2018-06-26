// @flow
import createChunks from '../createChunks';

describe('createChunks()', () => {
  it('should return ["1.1098"]', () => {
    const value = '1.1098';
    const expected = ['1.1098'];
    expect(createChunks(value)).toEqual(expected);
  });
  it('should return ["1", ".", "100", ".", "1"]', () => {
    const value = '1.100.1';
    const expected = ['1', '.', '100', '.', '1'];
    expect(createChunks(value)).toEqual(expected);
  });
  it('should return [0.2]', () => {
    const value = '.2';
    const expected = ['.2'];
    expect(createChunks(value)).toEqual(expected);
  });
  it('should return [1]', () => {
    const value = '1';
    const expected = ['1'];
    expect(createChunks(value)).toEqual(expected);
  });
  it('should return ["v", "1", ".", "100", ".", "1"]', () => {
    const value = 'v1.100.1';
    const expected = ['v', '1', '.', '100', '.', '1'];
    expect(createChunks(value)).toEqual(expected);
  });
  it('should return ["abc"]', () => {
    const value = 'abc';
    const expected = ['abc'];
    expect(createChunks(value)).toEqual(expected);
  });
  it('should return ["2018", "-", "06", "-", "12", "T", "22", ":", "25", ":", "00", ".", "000", "Z"]', () => {
    const value = '2018-06-12T22:25:00.000Z';
    const expected = [
      '2018',
      '-',
      '06',
      '-',
      '12',
      'T',
      '22',
      ':',
      '25',
      ':',
      '00',
      '.',
      '000',
      'Z',
    ];
    expect(createChunks(value)).toEqual(expected);
  });
});
