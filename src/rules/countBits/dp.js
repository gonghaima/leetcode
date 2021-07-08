/**
 * @param {number} n
 * @return {number[]}
 */

/***********************************************************************************************
 *   RUNTIME: 92 MS, FASTER THAN 94.14% OF JAVASCRIPT ONLINE SUBMISSIONS FOR COUNTING BITS.    *
 * MEMORY USAGE: 44.2 MB, LESS THAN 94.14% OF JAVASCRIPT ONLINE SUBMISSIONS FOR COUNTING BITS. *
 ***********************************************************************************************/

// https://leetcode.com/problems/counting-bits/discuss/79557/How-we-handle-this-question-on-interview-Thinking-process-%2B-DP-solution

var countBits = function (n) {
    const result = new Array(n + 1).fill(0);
    let offset = 1;
    for (let index = 1; index < n + 1; ++index) {
        if (offset * 2 == index) {
            offset *= 2;
        }
        result[index] = result[index - offset] + 1;
    }
    return result;
};

export default countBits;