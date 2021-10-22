/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

// dfs

// time O(n),  space O(n)

// https://leetcode.com/problems/jump-game-iii/discuss/465602/JavaC%2B%2BPython-1-Line-Recursion

/***********************************************************************************************
 *   Runtime: 119 ms, faster than 36.40% of JavaScript online submissions for Jump Game III.   *
 * Memory Usage: 49.4 MB, less than 54.81% of JavaScript online submissions for Jump Game III. *
 ***********************************************************************************************/

var canReach = function (arr, start) {
  return 0 <= start && start < arr.length && arr[start] >= 0 && ((arr[start] = -arr[start]) === 0 || canReach(arr, start + arr[start]) || canReach(arr, start - arr[start]));
}

export default canReach;