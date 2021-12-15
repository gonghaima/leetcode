/**
 * @param {number[]} piles
 * @return {number}
 */

// https://leetcode.com/problems/stone-game-ii/submissions/

/***********************************************************************************************
 *   Runtime: 126 ms, faster than 50.00% of JavaScript online submissions for Stone Game II.   *
 * Memory Usage: 44.6 MB, less than 37.50% of JavaScript online submissions for Stone Game II. *
 ***********************************************************************************************/

var stoneGameII = function(piles) {
  const n = piles.length;
  const memo = new Map();
  const sums = new Array(n).fill(0);

  sums[n - 1] = piles[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    sums[i] = sums[i + 1] + piles[i]; // (1)
  }

  return findMax(0, 1);

  function findMax(index, M) {
    // (2)
    const key = `${index}#${M}`;

    // base case
    if (n - index <= 2 * M) return sums[index]; // (3)
    if (memo.has(key)) return memo.get(key);

    let res = Number.MIN_SAFE_INTEGER;

    for (let x = 1; x <= 2 * M; x++) {
      // (4)
      const newM = Math.max(x, M); // (5)
      res = Math.max(res, sums[index] - findMax(index + x, newM)); // (6)
    }

    memo.set(key, res);
    return res;
  }
};
/* 
Comments:

(1) sums[i] = piles[i] + sum(piles[i + 1], piles[i + 2], ... piles[n - 1]).

(2) You can think of index as the starting position of the stone piles that are remaining. So at beginning, where index = 0,
	we have all the original piles left. If index = 2, then we have the piles[2] ... piles[n - 1] unclaimed.

(3) In this case the current move will be the last move. Therefore, knowing this, a player will want to take advantage of this 
	information by taken the remaining piles.

(4) A player at any point in the game will have the option of taking x piles, where 1 <= x <= 2M. If the # of remaining piles is less
	than 2M, the if conditional clause at (3) takes care of it.

(5) M, which initially equals 1, is the value used to set the limitation of stone piles a player can take at each turn. 
	The value gets updated to M = Math.max(x, M) and the limit of stone piles is doubled based on the new value of M. 

(6) As x increases, the current player is taking more piles.

*/

export default stoneGameII;
