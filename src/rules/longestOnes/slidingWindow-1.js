/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**********************************************************************************************************
 * Runtime: 88 ms, faster than 80.65% of JavaScript online submissions for Max Consecutive Ones III.      *
 * Memory Usage: 43.7 MB, less than 20.83% of JavaScript online submissions for Max Consecutive Ones III. *
 **********************************************************************************************************/


// sliding window
// https://leetcode.com/problems/max-consecutive-ones-iii/discuss/1029876/Concise-Never-Shrinking-Sliding-Window-Approach

/*************************************************************************************************************************************************************************
 * Never shrinking sliding window approach:                                                                                                                              *
 * TC-O(n)                                                                                                                                                               *
 * SC-O(1)                                                                                                                                                               *
 *                                                                                                                                                                       *
 * Slightly more TC and SC efficient without keeping the longest variable and skipping the Math.max() operation.                                                         *
 * Since we have to find the MAXIMUM window, we never reduce the size of the window. We either increase the size of the window or remain same but never reduce the size. *
 *                                                                                                                                                                       *
 *************************************************************************************************************************************************************************/



const longestOnes = (A, K) => {
    let p1 = 0;
    let p2 = 0;

    while (p2 < A.length) {
        if (!A[p2]) K--;
        if (K < 0) {
            if (!A[p1]) K++;
            p1++;
        }
        p2++;
    }

    return p2 - p1;
};

export default longestOnes;