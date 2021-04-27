/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */

/********************************************************************************************************************
 * Runtime: 84 ms, faster than 75.68% of JavaScript online submissions for Get Equal Substrings Within Budget.      *
 * Memory Usage: 40.1 MB, less than 62.16% of JavaScript online submissions for Get Equal Substrings Within Budget. *
 ********************************************************************************************************************/

// sliding window
// https://leetcode.com/problems/get-equal-substrings-within-budget/discuss/393080/JavaScript-Easy-to-understand-2-solutions

/**************************************************************************************************************************************************
 * SOLUTION 2                                                                                                                                     *
 * Here's a more concise version of solution 1.                                                                                                   *
 *                                                                                                                                                *
 * We move the right edge step by step just like solution 1. But the key point is that we also move the left edge step by step if it's necessary. *
 *                                                                                                                                                *
 * But why? It's pretty easy to find out that the window could be invalidated.                                                                    *
 *                                                                                                                                                *
 * Let's see, first of all, we only need to find out the longest substring which means we don't care about the others.                            *
 *                                                                                                                                                *
 * Then, if we have a substring right now. There are only 2 situations:                                                                           *
 *                                                                                                                                                *
 * We could find a longer one: the window will be validated naturally when we meet the longer one.                                                *
 * It's the longest one: we got the longest length even the current window may not be validated.                                                  *
 **************************************************************************************************************************************************/

var equalSubstring = function (s, t, maxCost) {
    let left = -1;
    for (let right = 0; right < s.length; ++right) {
        maxCost -= Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
        if (maxCost < 0) {
            ++left;
            maxCost += Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
        }
    }
    return s.length - left - 1;
};

export default equalSubstring;