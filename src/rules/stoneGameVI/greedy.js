/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */

// https://leetcode.com/problems/stone-game-vi/submissions/

/***********************************************************************************************
 * Runtime: 304 ms, faster than 72.73% of JavaScript online submissions for Stone Game VI.     *
 * Memory Usage: 71.1 MB, less than 72.73% of JavaScript online submissions for Stone Game VI. *
 ***********************************************************************************************/

var stoneGameVI = function(aliceValues, bobValues) {
  let A = 0;
  let B = 0;
  let arr = [];
  let len = aliceValues.length;
  for (let i = 0; i < len; i++) {
    arr.push([aliceValues[i] + bobValues[i], aliceValues[i], bobValues[i]]);
  }
  arr.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < len; i += 2) {
    A += arr[i][1];
    if (arr[i + 1] !== undefined) {
      B += arr[i + 1][2];
    }
  }
  if (A > B) return 1;
  if (A == B) return 0;
  if (A < B) return -1;
};

export default stoneGameVI;
