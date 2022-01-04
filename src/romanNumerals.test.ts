import { romanNumeral } from './romanNumeral';

describe('Roman numerals', () => {
  it.each([
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
  ])('el valor %i devuelve %s', (arabic: number, roman: string) => {
    const result = romanNumeral(arabic);

    expect(result).toBe(roman);
  });
});
