/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */

/******************************************************************************************************************
 *   Runtime: 84 ms, faster than 94.55% of JavaScript online submissions for Knight Probability in Chessboard.    *
 * Memory Usage: 44.8 MB, less than 49.70% of JavaScript online submissions for Knight Probability in Chessboard. *
 ******************************************************************************************************************/

// https://leetcode.com/problems/knight-probability-in-chessboard/discuss/113954/Evolve-from-recursive-to-dpbeats-94

var knightProbability = function (n, k, row, column) {
    const dir = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];
    let dp = [...Array(n)].map(_ => [...Array(n)].map(__ => new Array(k + 1).fill(0)));

    const find = (n, k, r, c) => {
        if (r < 0 || r > n - 1 || c < 0 || c > n - 1) return 0;
        if (k == 0) return 1;
        if (dp[r][c][k] != 0) return dp[r][c][k];
        let rate = 0;
        for (let i = 0; i < dir.length; i++) rate += 0.125 * find(n, k - 1, r + dir[i][0], c + dir[i][1]);
        dp[r][c][k] = rate;
        return rate;
    };


    let rs = find(n, k, row, column);
    return Math.round(rs * 100000) / 100000;
};

export default knightProbability;