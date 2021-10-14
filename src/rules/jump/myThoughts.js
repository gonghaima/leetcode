/**
 * @param {number[]} nums
 * @return {boolean}
 */

// test cases passes, failed on submit

var canJump = function (nums) {
  // a hashmap to contain reachable index
  let reachable = new Set();
  let next = [nums[0]];

  // start from the index 0, add next reachable index for next iteration
  // meanwhile, add index in the hashmap
  while (next.length && !reachable.has(nums.length - 1)) {
    let tmp = [];
    for (let i = 0; i < next.length; i++) {
      const currentIndex = next[i];
      for (let j = 0; j < currentIndex; j++) {
        const nextIndex = j + nums[j];
        if (!reachable.has(j)) {
          reachable.add(j);
          tmp.push(j);
        } else if (!reachable.has(nextIndex)) {
          reachable.add(nextIndex);
          tmp.push(nextIndex);
        }
      }
    };
    next = tmp;
  }


  // after all the iteration, check existence of the last index of the nums

  return reachable.has(nums.length - 1);
};
export default canJump;