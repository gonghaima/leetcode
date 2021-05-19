/**
 * @param {number} n
 * @return {number}
 */

/***********************************************************************************************************
 * Runtime: 84 ms, faster than 26.61% of JavaScript online submissions for Unique Binary Search Trees.     *
 * Memory Usage: 39.8 MB, less than 6.85% of JavaScript online submissions for Unique Binary Search Trees. *
 ***********************************************************************************************************/

var numTrees = function (n) {
    let memo = new Map();
    const trees = (lo, hi, m) => {
        if (m.has(`${lo}-${hi}`)) return m.get(`${lo}-${hi}`);
        if (lo >= hi) return 1;
        let total = 0;
        for (let i = lo; i <= hi; i++)
            total += trees(lo, i - 1, m) * trees(i + 1, hi, m);
        m.set(`${lo}-${hi}`, total);
        return total;
    }
    return trees(1, n, memo);
};

export default numTrees;