/**
 * @param {string} s
 * @return {string[]}
 */

// https://leetcode.com/problems/restore-ip-addresses/discuss/925224/backtracking

/******************************************************************************************************
 * Runtime: 56 ms, faster than 99.75% of JavaScript online submissions for Restore IP Addresses.      *
 * Memory Usage: 43.3 MB, less than 38.31% of JavaScript online submissions for Restore IP Addresses. *
 ******************************************************************************************************/

var restoreIpAddresses = function(s) {
  const dp = function(path, start, res, s) {
    if (path.length == 4 && start == s.length) {
      res.push(path.join('.'));
      return;
    }
    if (path.length == 4 && start < s.length) {
      return;
    }
    for (let i = 1; i <= 3; i++) {
      if (start + i - 1 >= s.length) {
        return;
      }
      if (s[start] == '0' && i != 1) {
        return;
      }
      if (s.substring(start, start + i) > 255) {
        return;
      }
      path.push(s.substring(start, start + i));
      dp(path, start + i, res, s);
      path.pop();
    }
  };
  let res = [];
  dp([], 0, res, s);
  return res;
};

export default restoreIpAddresses;
