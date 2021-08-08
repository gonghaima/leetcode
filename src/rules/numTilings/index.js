/**
 * @param {number} n
 * @return {number}
 */

/************************************************************************************************************
 * Runtime: 76 ms, faster than 62.50 % of JavaScript online submissions for Domino and Tromino Tiling.      *
 * Memory Usage: 40.4 MB, less than 75.00 % of JavaScript online submissions for Domino and Tromino Tiling. *
 ************************************************************************************************************/

// https://leetcode.com/problems/domino-and-tromino-tiling/discuss/116581/Detail-and-explanation-of-O(n)-solution-why-dpn2*dn-1%2Bdpn-3

var numTilings = function (n) {
    let md = 1e9;
    md += 7;
    const v = new Array(1001).fill(0);
    v[1] = 1;
    v[2] = 2;
    v[3] = 5;
    if (n <= 3)
        return v[n];
    for (let i = 4; i <= n; ++i) {
        v[i] = 2 * v[i - 1] + v[i - 3];
        v[i] %= md;
    }
    return v[n];
};

export default numTilings;