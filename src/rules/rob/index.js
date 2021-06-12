/**
 * @param {number[]} nums
 * @return {number}
 */

/**********************************************************************************************
 *   RUNTIME: 92 MS, FASTER THAN 15.18% OF JAVASCRIPT ONLINE SUBMISSIONS FOR HOUSE ROBBER.    *
 * MEMORY USAGE: 37.7 MB, LESS THAN 99.55% OF JAVASCRIPT ONLINE SUBMISSIONS FOR HOUSE ROBBER. *
 **********************************************************************************************/

var rob = function (nums) {
  let noRob = 0;
  let rob = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const prevRob = rob;
    rob = noRob + nums[i];
    noRob = Math.max(noRob, prevRob);
  }
  const result = Math.max(rob, noRob);
  return result;
};

export default rob;