/**
 * @param {number[]} nums
 * @return {number}
 */

/**********************************************************************************************
 *   RUNTIME: 80 MS, FASTER THAN 54.77% OF JAVASCRIPT ONLINE SUBMISSIONS FOR HOUSE ROBBER.    *
 * MEMORY USAGE: 38.5 MB, LESS THAN 34.66% OF JAVASCRIPT ONLINE SUBMISSIONS FOR HOUSE ROBBER. *
 **********************************************************************************************/

var rob = function (nums) {
  const find = (pos, robAmount, noRobAmount) => {
    if (pos === nums.length - 1) return Math.max(robAmount, noRobAmount + nums[pos]);
    return find(pos + 1, Math.max(robAmount, noRobAmount + nums[pos]), Math.max(robAmount, noRobAmount));
  }
  const result = find(0, 0, 0);
  return result;
};

export default rob;