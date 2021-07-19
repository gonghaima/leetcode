/**
 * @param {number} n
 * @return {number}
 */

// brute force - third test case not passing

var checkRecord2 = function (n) {
    const dfs = (i, A, L, n) => {
        if (i == n) return 1;
        let res = dfs(i + 1, A, 0, n);  //P
        if (A == 0) res += dfs(i + 1, 1, 0, n); //A
        if (L < 2) res += dfs(i + 1, A, L + 1, n); //L
        return res;
    };
    return dfs(0, 0, 0, n);
};

export default checkRecord2;