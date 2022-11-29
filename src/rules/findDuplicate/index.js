/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/find-the-duplicate-number/discuss/72846/My-easy-understood-solution-with-O(n)-time-and-O(1)-space-without-modifying-the-array.-With-clear-explanation.

/*******************************************************************************************************
 * Runtime: 113 ms, faster than 86.56% of JavaScript online submissions for Find the Duplicate Number. *
 * Memory Usage: 50 MB, less than 60.62% of JavaScript online submissions for Find the Duplicate       *
 *******************************************************************************************************/

// time O(1) space O(1)

var findDuplicate = function(nums) {
  if (nums.length > 1) {
    let slow = nums[0];
    let fast = nums[nums[0]];
    while (slow != fast) {
      slow = nums[slow];
      fast = nums[nums[fast]];
    }

    fast = 0; // slow = 4, fast = 0
    while (fast != slow) {
      fast = nums[fast];//f(0)1     f(1)3       f(3)2
      slow = nums[slow];//f(4)2     f(2)4       f(4)2
    }
    return slow;
  }
  return -1;
};

export default findDuplicate;
