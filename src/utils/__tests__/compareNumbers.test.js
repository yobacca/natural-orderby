// @flow
import compareNumbers from '../compareNumbers';

describe('compareNumbers()', () => {
  it('should return a negative number', () => {
    const valueX = 1;
    const valueY = 2;
    expect(compareNumbers(valueX, valueY)).toBeLessThan(0);
  });
  it('should return a negative number', () => {
    const valueX = 0.1;
    const valueY = 0.2;
    expect(compareNumbers(valueX, valueY)).toBeLessThan(0);
  });
  it('should return a negative number', () => {
    const valueX = -0.2;
    const valueY = 0.1;
    expect(compareNumbers(valueX, valueY)).toBeLessThan(0);
  });
  it('should return 0', () => {
    const valueX = 1;
    const valueY = 1;
    expect(compareNumbers(valueX, valueY)).toBe(0);
  });
  it('should return 0', () => {
    const valueX = 0.1;
    const valueY = 0.1;
    expect(compareNumbers(valueX, valueY)).toBe(0);
  });
  it('should return 0', () => {
    const valueX = -0.1;
    const valueY = -0.1;
    expect(compareNumbers(valueX, valueY)).toBe(0);
  });
  it('should return 0', () => {
    const valueX = 0;
    const valueY = 0;
    expect(compareNumbers(valueX, valueY)).toBe(0);
  });
  it('should return a positive number', () => {
    const valueX = 2;
    const valueY = 1;
    expect(compareNumbers(valueX, valueY)).toBeGreaterThan(0);
  });
  it('should return a positive number', () => {
    const valueX = 0.2;
    const valueY = 0.1;
    expect(compareNumbers(valueX, valueY)).toBeGreaterThan(0);
  });
  it('should return 1', () => {
    const valueX = 0.1;
    const valueY = -0.2;
    expect(compareNumbers(valueX, valueY)).toBeGreaterThan(0);
  });
});
