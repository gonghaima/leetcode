/**
 * @param {number[][]} pairs
 * @return {number}
 */

/**************************************************************************************************************
 *   Runtime: 100 ms, faster than 69.77% of JavaScript online submissions for Maximum Length of Pair Chain.   *
 * Memory Usage: 43.4 MB, less than 33.72% of JavaScript online submissions for Maximum Length of Pair Chain. *
 **************************************************************************************************************/

//greedy

// https://leetcode.com/problems/maximum-length-of-pair-chain/discuss/736458/JavaScript-Clean-Greedy-Approach-O(N-LogN)

var findLongestChain = function (pairs) {
    // sort by the earliest finish time
    pairs.sort((a, b) => a[1] - b[1]);
    let prev = pairs[0], chain = 1;
    for (let i = 1; i < pairs.length; i++) {
        const [prevS, prevE] = prev;
        const [currS, currE] = pairs[i];
        if (prevE < currS) {
            prev = pairs[i];
            chain++;
        }
    }
    return chain;
};

export default findLongestChain;