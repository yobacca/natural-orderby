import { compareNumbers } from '../compareNumbers';

describe('compareNumbers()', () => {
  it('should return a negative number (1)', () => {
    const valueX = 1;
    const valueY = 2;
    expect(compareNumbers(valueX, valueY)).toBeLessThan(0);
  });
  it('should return a negative number (2)', () => {
    const valueX = 0.1;
    const valueY = 0.2;
    expect(compareNumbers(valueX, valueY)).toBeLessThan(0);
  });
  it('should return a negative number (3)', () => {
    const valueX = -0.2;
    const valueY = 0.1;
    expect(compareNumbers(valueX, valueY)).toBeLessThan(0);
  });
  it('should return 0 (4)', () => {
    const valueX = 1;
    const valueY = 1;
    expect(compareNumbers(valueX, valueY)).toBe(0);
  });
  it('should return 0 (5)', () => {
    const valueX = 0.1;
    const valueY = 0.1;
    expect(compareNumbers(valueX, valueY)).toBe(0);
  });
  it('should return 0 (6)', () => {
    const valueX = -0.1;
    const valueY = -0.1;
    expect(compareNumbers(valueX, valueY)).toBe(0);
  });
  it('should return 0 (7)', () => {
    const valueX = 0;
    const valueY = 0;
    expect(compareNumbers(valueX, valueY)).toBe(0);
  });
  it('should return a positive number (8)', () => {
    const valueX = 2;
    const valueY = 1;
    expect(compareNumbers(valueX, valueY)).toBeGreaterThan(0);
  });
  it('should return a positive number (9)', () => {
    const valueX = 0.2;
    const valueY = 0.1;
    expect(compareNumbers(valueX, valueY)).toBeGreaterThan(0);
  });
  it('should return 1 (10)', () => {
    const valueX = 0.1;
    const valueY = -0.2;
    expect(compareNumbers(valueX, valueY)).toBeGreaterThan(0);
  });
});
