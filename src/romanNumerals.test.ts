import { romanNumeral } from './romanNumeral';

describe('Roman numerals', () => {
  it('Valor 1 devuelve I', () => {
    const result = romanNumeral(1);

    expect(result).toBe('I');
  });

  it('Valor 5 devuelve V', () => {
    const result = romanNumeral(5);

    expect(result).toBe('V');
  });

  it('Valor 10 devuelve X', () => {
    const result = romanNumeral(10);

    expect(result).toBe('X');
  });
});
