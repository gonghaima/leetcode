// idea is to reverse the string as a new string,
//  loop through each combination of the new string, compare if exists in old string
// add matched string into result array
// filter out non-palindrome value in result array
// return longest string in result array
export const longestPalindromeSolution1 = s => {
  if (s.length === 1) return s;
  const sub = s
    .split('')
    .reverse()
    .join('');

  let longestMatch = [];

  //find out the longest matched value from each position of reversed string (sub),
  //then add into matched array
  for (let i = 0; i < sub.length; i++) {
    let currentCount = i;
    let element = sub.substring(i, currentCount);

    while (s.indexOf(element) !== -1 && currentCount <= sub.length) {
      currentCount++;
      element = sub.substring(i, currentCount);
    }
    const pl = sub.substring(i, currentCount - 1);
    longestMatch.push(pl);
  }

  //filter out none palindrome value
  let palindromes = longestMatch.filter(
    a =>
      a ===
      a
        .split('')
        .reverse()
        .join('')
  );

  const final =
    palindromes.length !== 0
      ? palindromes.reduce((a, b) => {
          return a.length > b.length ? a : b;
        })
      : '';
  return final;
};
