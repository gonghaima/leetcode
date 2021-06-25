
/****************************************************************************************************
 *   RUNTIME: 68 MS, FASTER THAN 96.61% OF JAVASCRIPT ONLINE SUBMISSIONS FOR WIGGLE SUBSEQUENCE.    *
 * MEMORY USAGE: 38.9 MB, LESS THAN 10.17% OF JAVASCRIPT ONLINE SUBMISSIONS FOR WIGGLE SUBSEQUENCE. *
 ****************************************************************************************************/

// greedy

const wiggleMaxLength = nums => {
  if (nums.length < 2) return nums.length;
  var down = 1,
    up = 1;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) up = down + 1;
    else if (nums[i] < nums[i - 1]) down = up + 1;
  }
  return Math.max(down, up);
};

export default wiggleMaxLength;