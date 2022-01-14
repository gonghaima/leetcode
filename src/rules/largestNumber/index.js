/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */

/**********************************************************************************************************************
 * Runtime: 128 ms, faster than 83.33% of JavaScript online submissions for Form Largest Integer With Digits That Add up to Target. *
 * Memory Usage: 42.3 MB, less than 83.33% of JavaScript online submissions for Form Largest Integer With Digits That Add up to Target. *
 **********************************************************************************************************************/

// https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/discuss/635564/Javascript-Simple-DP

var largestNumber = function(cost, target) {
  const arr = new Array(target + 1).fill('#');
  arr[0] = '';

  for (let i = 0; i < 9; i++) {
    for (let j = cost[i]; j <= target; j++) {
      if (
        arr[j - cost[i]] !== '#' &&
        arr[j - cost[i]].length + 1 >= arr[j].length
      ) {
        arr[j] = (i + 1).toString().concat(arr[j - cost[i]]);
      }
    }
  }

  return arr[target] == '#' ? '0' : arr[target];
};

export default largestNumber;
