/**
 * @param {number[]} nums
 * @return {number}
 */

/**********************************************************************************************
 *   RUNTIME: 80 MS, FASTER THAN 54.77% OF JAVASCRIPT ONLINE SUBMISSIONS FOR HOUSE ROBBER.    *
 * MEMORY USAGE: 37.8 MB, LESS THAN 96.28% OF JAVASCRIPT ONLINE SUBMISSIONS FOR HOUSE ROBBER. *
 **********************************************************************************************/

// it seems faster without Math.max

var rob = function (nums) {
  let noRob = 0;
  let rob = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const prevRob = rob;
    rob = noRob + nums[i];
    noRob = Math.max(noRob, prevRob);
    noRob = noRob > prevRob ? noRob : prevRob;
  }
  const result = rob > noRob ? rob : noRob;
  return result;
};

export default rob;