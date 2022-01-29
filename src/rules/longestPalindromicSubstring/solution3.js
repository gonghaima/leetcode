/***************************************************************************************************************
 *   Runtime: 104 ms, faster than 83.48% of JavaScript online submissions for Longest Palindromic Substring.   *
 * Memory Usage: 45.7 MB, less than 27.23% of JavaScript online submissions for Longest Palindromic Substring. *
 ***************************************************************************************************************/

export const longestPalindromeSolution3 = (s) => {
  let maxPal = '';

  for (let i = 0; i < s.length; i++) {
    bubble(i, i); // odd palindrome
    bubble(i, i + 1); // even palindrome
  }

  function bubble(left, right) {
    while (left >= 0 && s[left] === s[right]) {
      left--;
      right++;
    }
    left++;
    right--;

    if (maxPal.length < right - left + 1) {
      maxPal = s.slice(left, right + 1);
    }
  }
  return maxPal;
};
