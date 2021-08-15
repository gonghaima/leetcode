/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */

/******************************************************************************************************************
 *   Runtime: 164 ms, faster than 33.33% of JavaScript online submissions for Knight Probability in Chessboard.   *
 * Memory Usage: 51.8 MB, less than 30.30% of JavaScript online submissions for Knight Probability in Chessboard. *
 ******************************************************************************************************************/

// https://leetcode.com/problems/knight-probability-in-chessboard/discuss/751010/JavaScript-Solution-Top-Down-with-Memoization-and-2-DP-Approaches


var knightProbability = function (N, K, r, c) {
    const dirs = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    const memo = new Map();

    return findProbs(K, r, c);

    function findProbs(k, r, c) {
        const key = `${k}#${r}#${c}`;

        // base case
        if (isOutOfBound(r, c)) return 0.0; // .0 is for completeness sake. Don't really need it in JavaScript
        if (k === 0) return 1.0;
        if (memo.has(key)) return memo.get(key);

        let prob = 0;

        for (const [dirX, dirY] of dirs) {
            prob += 0.125 * findProbs(k - 1, r + dirX, c + dirY);
        }

        memo.set(key, prob);

        return prob;

    }

    function isOutOfBound(row, col) {
        return row < 0 || col < 0 || row >= N || col >= N;
    }
};

export default knightProbability;