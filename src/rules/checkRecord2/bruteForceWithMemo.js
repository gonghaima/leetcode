/**
 * @param {number} n
 * @return {number}
 */

// brute force - with memo - third test case still not passing

var checkRecord2 = function (n) {
    const dfs = (i, A, L, n, mem) => {
        if (i == n) return 1;
        if (mem[i][A][L] != 0) return mem[i][A][L];
        let res = dfs(i + 1, A, 0, n, mem);  //P
        if (A == 0) res += dfs(i + 1, 1, 0, n, mem); //A
        if (L < 2) res += dfs(i + 1, A, L + 1, n, mem); //L

        mem[i][A][L] = res % 1000000007;
        return mem[i][A][L];
    };

    const mem = new Array(n).fill(null).map(_ => new Array(2).fill(null).map(x => new Array(3).fill(0)));
    return dfs(0, 0, 0, n, mem);
};

export default checkRecord2;