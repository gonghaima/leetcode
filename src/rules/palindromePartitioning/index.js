/**
 * @param {string} s
 * @return {string[][]}
 */

/*********************************************************************************************************
 * Runtime: 312 ms, faster than 80.76% of JavaScript online submissions for Palindrome Partitioning.     *
 * Memory Usage: 81.2 MB, less than 41.93% of JavaScript online submissions for Palindrome Partitioning. *
 *********************************************************************************************************/

// backtrack
// https://leetcode.com/problems/palindrome-partitioning/discuss/1664463/Javascript-easy-backtracking-solution

var partition = function(s) {
  let result = [];
  function backtrack(i, partitions) {
    if (i >= s.length) {
      result.push([...partitions]);
      return;
    }
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(i, j)) {
        partitions.push(s.substring(i, j + 1));
        backtrack(j + 1, partitions);
        partitions.pop();
      }
    }
  }
  function isPalindrome(left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  backtrack(0, []);
  return result;
};
export default partition;
