/**
 * @param {number[]} nums
 * @return {number}
 */

/**********************************************************************************************
 *   RUNTIME: 76 MS, FASTER THAN 78.54% OF JAVASCRIPT ONLINE SUBMISSIONS FOR HOUSE ROBBER.    *
 * MEMORY USAGE: 38.5 MB, LESS THAN 49.39% OF JAVASCRIPT ONLINE SUBMISSIONS FOR HOUSE ROBBER. *
 **********************************************************************************************/

var rob = function (nums) {
  const find = (pos, robAmount, noRobAmount) => {
    if (pos === nums.length - 1) return Math.max(robAmount, noRobAmount + nums[pos]);
    const tempNoRob = Math.max(robAmount, noRobAmount);
    const tempRob = Math.max(robAmount, noRobAmount + nums[pos]);
    return find(pos + 1, tempRob, tempNoRob);
  }
  const result = find(0, 0, 0);
  return result;
};

export default rob;