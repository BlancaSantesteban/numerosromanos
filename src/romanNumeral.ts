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

  const isArabicOneLetter = arabicOneLetter.find(
    element => element.arabic === arabic,
  );
  if (isArabicOneLetter) {
    return isArabicOneLetter.roman;
  }
  const isArabicOneLetterPlusOne = arabicOneLetter.find(
    element => element.arabic + 1 === arabic,
  );
  if (isArabicOneLetterPlusOne) {
    return isArabicOneLetterPlusOne.roman.concat('I');
  }
  const isArabicOneLetterPlusTwo = arabicOneLetter.find(
    element => element.arabic + 2 === arabic,
  );
  if (isArabicOneLetterPlusTwo) {
    return isArabicOneLetterPlusTwo.roman.concat('II');
  }
  const isArabicOneLetterPlusThree = arabicOneLetter.find(
    element => element.arabic + 3 === arabic,
  );
  if (isArabicOneLetterPlusThree) {
    return isArabicOneLetterPlusThree.roman.concat('III');
  }
}
