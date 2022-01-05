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

  const isArabicOneLetter = arabicOneLetter.find(element => {
    if (element.arabic === arabic) {
      return element.roman;
    }
  });
  if (isArabicOneLetter) {
    return isArabicOneLetter.roman;
  }
  const value = arabicOneLetter.find(element => {
    if (element.arabic + 1 === arabic) {
      return element.roman;
    }
  });
  return value.roman.concat('I');
}
