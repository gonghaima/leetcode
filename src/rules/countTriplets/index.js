/**
 * @param {number[]} nums
 * @return {number}
 */

/**********************************************************************************************************************
 * Runtime: 1716 ms, faster than 66.67% of JavaScript online submissions for Triples with Bitwise AND Equal To Zero.  *
 * Memory Usage: 51 MB, less than 33.33% of JavaScript online submissions for Triples with Bitwise AND Equal To Zero. *
 **********************************************************************************************************************/

// https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/discuss/226721/Java-DP-O(3-*-216-*-n)-time-O(216)-space

var countTriplets = function (nums) {
    let N = 1 << 16;
    let dp = new Array(N).fill(0);
    dp[N - 1] = 1;
    for (let i = 0; i < 3; i++) {
        const temp = new Array(N).fill(0);
        for (let k = 0; k < N; k++) {
            for (let a of nums) {
                temp[k & a] += dp[k];
            }
        }
        dp = temp;
    }
    return dp[0];
};

export default countTriplets;