/**
 * @param {string} s
 * @return {string[][]}
 */

/*********************************************************************************************************
 * Runtime: 369 ms, faster than 63.02% of JavaScript online submissions for Palindrome Partitioning.     *
 * Memory Usage: 80.2 MB, less than 59.43% of JavaScript online submissions for Palindrome Partitioning. *
 *********************************************************************************************************/

// dp + backtrack
// https://leetcode.com/problems/palindrome-partitioning/discuss/346128/DP-%2B-backtracking

var partition = function(s) {
  let result = [];
  if (!s) {
    return result;
  }

  let memo = Array.from(Array(s.length), (_) => Array(s.length).fill(false));

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (i == j) {
        memo[i][j] = true;
        continue;
      }

      if (i - j <= 2) {
        memo[j][i] = s[i] === s[j];
      } else {
        memo[j][i] = s[j] === s[i] && memo[j + 1][i - 1];
      }
    }
  }

  helper(result, 0, s, [], memo);

  return result;
};

function helper(result, index, s, temp, memo) {
  if (index === s.length) {
    result.push(temp.concat());
    return;
  }

  for (let i = index; i < s.length; i++) {
    if (memo[index][i]) {
      temp.push(s.slice(index, i + 1));
      helper(result, i + 1, s, temp, memo);
      temp.pop();
    }
  }
}
export default partition;
