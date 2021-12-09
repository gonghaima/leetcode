/**
 * @param {number[]} piles
 * @return {boolean}
 */

// top down
// https://leetcode.com/problems/stone-game/discuss/731428/JavaScript-Solution-Top-Down-with-Memoization

var stoneGame = function(piles) {
  const n = piles.length;

  const memo = [];

  for (let i = 0; i < n; i++) {
    memo[i] = [];
  }

  return topDown(0, n - 1) > 0;

  function topDown(start, end) {
    if (start == end) return piles[start];
    if (memo[start][end]) return memo[start][end];

    const startPick = piles[start] - topDown(start + 1, end);
    const endPick = piles[end] - topDown(start, end - 1);

    const res = Math.max(startPick, endPick);

    memo[start][end] = res;

    return res;
  }
};

export default stoneGame;
