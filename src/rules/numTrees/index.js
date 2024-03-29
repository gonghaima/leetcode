/**
 * @param {number} n
 * @return {number}
 */


/************************************************************************************************************
 * Runtime: 92 ms, faster than 20.48% of JavaScript online submissions for Unique Binary Search Trees.      *
 * Memory Usage: 37.9 MB, less than 95.98% of JavaScript online submissions for Unique Binary Search Trees. *
 ************************************************************************************************************/

// https://leetcode.com/problems/unique-binary-search-trees/discuss/276140/Javascript-SIMPLEST-Just-math-no-loops.-Faster-than-97.

var numTrees = function (n) {
    const trees = (lo, hi) => {
        if (lo >= hi) return 1;
        let total = 0;
        for (let i = lo; i <= hi; i++)
            total += trees(lo, i - 1) * trees(i + 1, hi);
        return total;
    }
    return trees(1, n);
};

export default numTrees;