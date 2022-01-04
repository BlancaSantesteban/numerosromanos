import { romanNumeral } from './romanNumeral';

describe('Roman numerals', () => {
  it.each([
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
  ])('el valor %i devuelve %s', (arabic: number, roman: string) => {
    const result = romanNumeral(arabic);

    expect(result).toBe(roman);
  });
});
