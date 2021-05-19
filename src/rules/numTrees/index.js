/**
 * @param {number} n
 * @return {number}
 */

/************************************************************************************************************
 * Runtime: 5860 ms, faster than 5.24% of JavaScript online submissions for Unique Binary Search Trees.     *
 * Memory Usage: 38.2 MB, less than 71.77% of JavaScript online submissions for Unique Binary Search Trees. *
 ************************************************************************************************************/

// current number  = leftPossibility * rightPossibility

// https://leetcode.com/problems/unique-binary-search-trees/discuss/31666/DP-Solution-in-6-lines-with-explanation.-F(i-n)-G(i-1)-*-G(n-i)

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