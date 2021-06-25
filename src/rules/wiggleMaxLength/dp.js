
/***************************************************************************************************
 *   RUNTIME: 76 MS, FASTER THAN 70.69% OF JAVASCRIPT ONLINE SUBMISSIONS FOR WIGGLE SUBSEQUENCE.   *
 * MEMORY USAGE: 39.4 MB, LESS THAN 6.90% OF JAVASCRIPT ONLINE SUBMISSIONS FOR WIGGLE SUBSEQUENCE. *
 ***************************************************************************************************/

// less efficient, o(n^2)

// dp

const wiggleMaxLength = nums => {
  let size = nums.length;
  if (size == 0) return 0;
  const f = new Array(nums.length).fill(1);
  const d = new Array(nums.length).fill(1);
  for (let i = 1; i < size; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[j] < nums[i]) {
        f[i] = Math.max(f[i], d[j] + 1);
      }
      else if (nums[j] > nums[i]) {
        d[i] = Math.max(d[i], f[j] + 1);
      }
    }
  }
  return Math.max(d.pop(), f.pop());
};

export default wiggleMaxLength;