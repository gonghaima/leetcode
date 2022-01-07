/**
 * @param {number[]} stones
 * @return {number}
 */

/************************************************************************************************
 * Runtime: 133 ms, faster than 100.00% of JavaScript online submissions for Stone Game VIII.   *
 * Memory Usage: 50 MB, less than 100.00% of JavaScript online submissions for Stone Game VIII. *
 ************************************************************************************************/

// https://leetcode.com/problems/stone-game-viii/discuss/1224852/JavaScript-Prefix-Sum-w-explanation

var stoneGameVIII = function(stones) {
  // use the stones array to create a prefixsum array
  for (let i = 1; i < stones.length; i++) {
    stones[i] += stones[i - 1];
  }

  // initialize scores as if Alice took all stones on the first move
  let aliceBestScore = stones[stones.length - 1];
  let bestPrevScore = stones[stones.length - 1];
  for (let i = stones.length - 2; i > 0; i--) {
    aliceBestScore = Math.max(aliceBestScore, bestPrevScore);

    // calculate the score if bob or alice were to take at i
    // and see if it is the best score for bob or alice to take
    const score = stones[i] - bestPrevScore;
    bestPrevScore = Math.max(bestPrevScore, score);
  }
  return Math.max(aliceBestScore, bestPrevScore);
};

export default stoneGameVIII;
