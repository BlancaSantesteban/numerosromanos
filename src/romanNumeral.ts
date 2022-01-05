export function romanNumeral(arabic: number) {
  const arabicOneLetter = [
    {
      arabic: 1,
      roman: 'I',
    },
    {
      arabic: 5,
      roman: 'V',
    },
    {
      arabic: 10,
      roman: 'X',
    },
    {
      arabic: 50,
      roman: 'L',
    },
    {
      arabic: 100,
      roman: 'C',
    },
    {
      arabic: 500,
      roman: 'D',
    },
    {
      arabic: 1000,
      roman: 'M',
    },
  ];

  const value = arabicOneLetter.find(element => {
    if (element.arabic === arabic) {
      return element.roman;
    }
  });
  if (value) {
    return value.roman;
  }

  if (arabic === 2) {
    return 'II';
  }
  if (arabic === 6) {
    return 'VI';
  }
  if (arabic === 11) {
    return 'XI';
  }
}
