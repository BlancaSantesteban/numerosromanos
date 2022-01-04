export function romanNumeral(arabic: number) {
  if (arabic === 10) {
    return 'X';
  }

  if (arabic === 5) {
    return 'V';
  }
  return 'I';
}
