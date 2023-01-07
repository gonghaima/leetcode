/**
 * @param {number[]} nums
 * @return {number[]}
 */

/***********
 * Runtime *
 * 262 ms  *
 * Beats   *
 * 98.56%  *
 * Memory  *
 * 72.1 MB *
 * Beats   *
 * 76.98%  *
 ***********/

var countSmaller = function(nums) {
  /*
                    My Fenwick Tree implementation - it's 1 based, but the range of nums is -10^4 - 10^4.
                    Hilarity ensues.  Due to the nature of the problem, I'll start everything at 0 and build
                    up incrementally.
            */
  const FTree = function(min, max) {
    const offset = 1 - min; // Add this to each num for FT stuff.

    let fnums = Array(1 + max - min).fill(0);

    /* Least Significant Bit finder - used in queries and poit updates - get the bit pattern starting at the rightmost 1. */
    const lsb = (n) => n & -n;

    /* Query - finds the count of elements through the given index (after translating to FT point offset). */
    const query = function(ind) {
      ind += offset;

      let sum = 0;
      while (ind > 0) {
        sum += fnums[ind - 1];
        ind -= lsb(ind);
      }
      return sum;
    };

    /* Increment - updates the count by 1 at the given (translated) index. */
    const incr = function(ind) {
      ind += offset;

      while (ind <= fnums.length) {
        fnums[ind - 1]++;
        ind += lsb(ind);
      }
    };

    return { query, incr, fnums };
  };

  /* Find the min and max of nums. */
  let min = nums[0],
    max = nums[0];
  for (let num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  /* Create a Fenwick tree. */
  let ftree = FTree(min, max);

  /* Going right to left, count the smaller items to the right. */
  let result = Array(nums.length);
  result[result.length - 1] = 0;
  for (let i = result.length - 1; i >= 0; i--) {
    result[i] = ftree.query(nums[i] - 1);
    ftree.incr(nums[i]);
  }

  return result;
};

export default countSmaller;
