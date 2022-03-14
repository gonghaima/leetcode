/**
 * @param {string} s
 * @return {string[][]}
 */

/*********************************************************************************************************
 * Runtime: 393 ms, faster than 55.15% of JavaScript online submissions for Palindrome Partitioning.     *
 * Memory Usage: 80.5 MB, less than 55.85% of JavaScript online submissions for Palindrome Partitioning. *
 *********************************************************************************************************/

// dfs
// https://leetcode.com/problems/palindrome-partitioning/discuss/557573/Intuitive-Javascript-Solution-with-DFS

var partition = function(s) {
  const output = [];
  const partitions = [];
  const isPalindrome = (str) =>
    str ===
    str
      .split('')
      .reverse()
      .join('');
  const findPalindrome = (str, start, parts, result) => {
    if (start === str.length) {
      result.push([...parts]);
      return;
    }

    for (let i = start + 1; i <= str.length; i++) {
      const target = str.substring(start, i);
      if (isPalindrome(target)) {
        parts.push(target);
        findPalindrome(str, i, parts, result);
        parts.pop();
      }
    }
  };
  /*
      string: 'aab'
      start = 0 will find palindrome in 'a', 'aa', 'aab'
      start = 1 will find palindrome in      'a',  'ab'
      start = 2 will find palindrome in            'b'
   */
  findPalindrome(s, 0, partitions, output);

  return output;
};
export default partition;
