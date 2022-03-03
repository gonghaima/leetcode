/**
 * @param {string} s
 * @return {string[]}
 */

// https://leetcode.com/problems/restore-ip-addresses/discuss/672543/JavaScript-The-Most-Clean-Backtracking-Solution

/******************************************************************************************************
 * Runtime: 86 ms, faster than 67.41% of JavaScript online submissions for Restore IP Addresses.      *
 * Memory Usage: 43.4 MB, less than 37.31% of JavaScript online submissions for Restore IP Addresses. *
 ******************************************************************************************************/

var restoreIpAddresses = function(s) {
  const result = [];

  function permute(arr, str) {
    if (arr.length === 3) {
      if (isValid(str)) result.push([...arr, str]);
      return;
    }

    for (let i = 1; i < 4; i++) {
      let subStr = str.slice(0, i);
      if (!isValid(subStr)) continue;
      permute([...arr, subStr], str.slice(i));
    }
  }

  function isValid(str) {
    if (+str > 255 || !str.length) return false;
    if (str.length >= 2 && str[0] === '0') return false;
    return true;
  }

  permute([], s);
  return result.map((x) => x.join('.'));
};

export default restoreIpAddresses;
