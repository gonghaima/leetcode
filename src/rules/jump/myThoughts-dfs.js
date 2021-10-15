/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  // define a set to store reachable index
  const reachable = {};
  let can = false;

  // a function, keeping finding the next available index
  // mark index in a set
  const helper = (nums, currentIndex) => {
    if (can === true) return true;
    if (currentIndex >= nums.length) return;
    if (currentIndex === nums.length - 1) {
      can = true;
      return;
    }
    reachable[currentIndex] = true;
    reachable[currentIndex + nums[currentIndex]] = true;
    helper(nums, currentIndex++);
  };

  helper(nums, 0);
  // check existence of the last item index , return true or false
  return can;

};
export default canJump;