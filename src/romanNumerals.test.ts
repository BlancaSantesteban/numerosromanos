import { romanNumeral } from './romanNumeral';

describe('Roman numerals', () => {
  it.each([
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [5, 'V'],
    [6, 'VI'],
    [8, 'VIII'],
    [10, 'X'],
    [11, 'XI'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [503, 'DIII'],
    [1000, 'M'],
  ])('el valor %i devuelve %s', (arabic: number, roman: string) => {
    const result = romanNumeral(arabic);

    expect(result).toBe(roman);
  });
});
