/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */

/********************************************************************************************************************
 * Runtime: 84 ms, faster than 73.53% of JavaScript online submissions for Get Equal Substrings Within Budget.      *
 * Memory Usage: 39.5 MB, less than 91.18% of JavaScript online submissions for Get Equal Substrings Within Budget. *
 ********************************************************************************************************************/

// sliding window
// https://leetcode.com/problems/get-equal-substrings-within-budget/discuss/393080/JavaScript-Easy-to-understand-2-solutions

var equalSubstring = function (s, t, maxCost) {
    let max = 0;
    for (let left = -1, right = 0; right < s.length; ++right) {
        maxCost -= Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
        if (maxCost >= 0) {
            right - left > max && (max = right - left);
        } else {
            while (maxCost < 0) {
                ++left;
                maxCost += Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            }
        }
    }
    return max;
};

export default equalSubstring;