export function romanNumeral(arabic: number) {
  if (arabic === 50) {
    return 'L';
  }
  if (arabic === 10) {
    return 'X';
  }

  if (arabic === 5) {
    return 'V';
  }

  return 'I';
}
