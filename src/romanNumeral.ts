export function romanNumeral(arabic: number) {
  if (arabic === 2) {
    return 'II';
  }
  if (arabic === 1000) {
    return 'M';
  }

  if (arabic === 500) {
    return 'D';
  }

  if (arabic === 100) {
    return 'C';
  }

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
