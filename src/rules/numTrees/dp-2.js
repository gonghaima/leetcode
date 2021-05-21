/**
 * @param {number} n
 * @return {number}
 */

/************************************************************************************************************
 * Runtime: 92 ms, faster than 20.48% of JavaScript online submissions for Unique Binary Search Trees.      *
 * Memory Usage: 37.9 MB, less than 95.98% of JavaScript online submissions for Unique Binary Search Trees. *
 ************************************************************************************************************/

// https://leetcode.com/problems/unique-binary-search-trees/discuss/703049/Python-Math-oneliner-O(n)-using-Catalan-number-explained

function factorial(num) {
    if (num <= 0)
        return 1;
    else
        return num * factorial(num - 1);
}

var numTrees = function (n) {
    return factorial(2 * n) / (factorial(n + 1) * factorial(n));
};
export default numTrees;