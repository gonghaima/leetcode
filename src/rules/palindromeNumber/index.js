export const isPalindrome = function(x) {
  const stringVersion = x.toString();
  const reversed = stringVersion
    .split('')
    .reverse()
    .join('');
  return stringVersion === reversed;
};
