/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */

//https://leetcode.com/problems/jump-game-v/discuss/497781/JavaScript-Dynamic-Programming-w-explanation

/*********************************************************************************************
 *   Runtime: 108 ms, faster than 50.00% of JavaScript online submissions for Jump Game V.   *
 * Memory Usage: 41.8 MB, less than 50.00% of JavaScript online submissions for Jump Game V. *
 *********************************************************************************************/

var maxJumps = function (arr, d) {
  // create a cache to cach all the maximum jumps from each index
  const cache = new Array(arr.length);

  // diffs will hold the difference between the current index and next index
  // 1 is jumping to the right
  // -1 is jumping to the left
  const diffs = [1, -1];

  // depth first search taking an index of the index being examined
  const dfs = (i) => {
    // if there is a value in the cache return it
    if (cache[i]) return cache[i];

    // initialize the max as 0
    let max = 0;

    // using diffs jump to the right and to the left
    for (let diff of diffs) {
      for (let j = diff; Math.abs(j) <= d; j += diff) {

        // calculate the next jump position
        const nextPosition = i + j;

        // find out if the jump is valid
        const isValidJump = nextPosition >= 0 && nextPosition < arr.length && arr[i] > arr[nextPosition];

        // if the jump is valid, keep searching
        if (isValidJump) max = Math.max(max, dfs(nextPosition));
        // if it's not stop the for loop
        else break;
      }
    }

    // add 1 to max to represent the current position
    const result = max + 1;
    cache[i] = result;
    return result;
  }

  // initialize jumping from each position
  for (let i = 0; i < arr.length; i++) dfs(i);

  // return the max in the cache
  return Math.max(...cache)
};

export default maxJumps;