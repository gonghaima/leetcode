/**
 * @param {number[]} nums
 * @return {number}
 */

/**********************************************************************************************
 *   RUNTIME: 72 MS, FASTER THAN 92.83% OF JAVASCRIPT ONLINE SUBMISSIONS FOR HOUSE ROBBER.    *
 * MEMORY USAGE: 38.2 MB, LESS THAN 81.42% OF JAVASCRIPT ONLINE SUBMISSIONS FOR HOUSE ROBBER. *
 **********************************************************************************************/

// it seems faster without Math.max

var rob = function (nums) {
  let noRob = 0;
  let rob = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const prevRob = rob;
    rob = noRob + nums[i];
    noRob = noRob > prevRob ? noRob : prevRob;
  }
  const result = rob > noRob ? rob : noRob;
  return result;
};

export default rob;