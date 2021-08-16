/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */

/******************************************************************************************************************
 *   Runtime: 124 ms, faster than 57.58% of JavaScript online submissions for Knight Probability in Chessboard.   *
 * Memory Usage: 43.5 MB, less than 60.00% of JavaScript online submissions for Knight Probability in Chessboard. *
 ******************************************************************************************************************/

// https://leetcode.com/problems/knight-probability-in-chessboard/discuss/415912/Clean-JavaScript-Backtracking-and-Dynamic-Programming-solutions

const knightProbability = (N, K, r, c) => {
    const dirs = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];

    const dp = [...Array(K + 1)].map(() => [...Array(N)].map(() => Array(N).fill(0)));
    dp[0][r][c] = 1;

    for (let k = 1; k <= K; k++) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                for (const [dx, dy] of dirs) {
                    const x = i + dx;
                    const y = j + dy;
                    if (x >= 0 && x < N && y >= 0 && y < N) {
                        dp[k][i][j] += dp[k - 1][x][y] / 8;
                    }
                }
            }
        }
    }

    let res = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            res += dp[K][i][j];
        }
    }
    return res;
};

export default knightProbability;