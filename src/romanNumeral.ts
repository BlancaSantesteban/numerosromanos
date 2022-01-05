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

  for (let count = 0; count <= 3; count++) {
    const isArabic = arabicOneLetter.find(
      element => element.arabic + count === arabic,
    );
    if (isArabic) {
      const iNumbers = 'I'.repeat(count);
      return isArabic.roman.concat(iNumbers);
    }
  }
}
