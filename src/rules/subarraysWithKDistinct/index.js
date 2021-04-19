/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

// https://leetcode.com/problems/subarrays-with-k-different-integers/discuss/235293/Java-%22Elastic%22-Sliding-Window


/**********************************************************************************************************************
 * Runtime: 92 ms, faster than 97.96% of JavaScript online submissions for Subarrays with K Different Integers.       *
 * Memory Usage: 45.4 MB, less than 100.00% of JavaScript online submissions for Subarrays with K Different Integers. *
 **********************************************************************************************************************/

var subarraysWithKDistinct = function (A, K) {
    if (A == null || A.length == 0 || K == 0 || A.length < K) {
        return 0;
    }
    let count = Array(A.length + 1).fill(0);
    let l = 0, acc = 0, res = 0;
    for (let r = 0; r < A.length; r++) {
        if (count[A[r]]++ == 0) {
            K--;
        }
        if (K < 0) {
            count[A[l++]]--;
            K++;
            acc = 0;
        }
        if (K == 0) {
            while (count[A[l]] > 1) {
                count[A[l++]]--;
                acc++;
            }
            res += acc + 1;
        }
    }
    return res;
}

export default subarraysWithKDistinct;

/**********************************************************************************************************************************************************************************************************************************************************************************************************************************************
 *                                                                                                                                                                                                                                                                                                                                            *
 * In this question, we maintain two pointers, l -> left, r -> right, and 1 variable, acc which is the accumulation of prefix subarray length that has duplicated elements of the current window scope.                                                                                                                                       *
 *                                                                                                                                                                                                                                                                                                                                            *
 * When we get exactly K distinct elements in a window, we maintain the window such that it's the smallest size with K distinct elements that ends with index r. In addition, we know there are acc elements with duplicated values that we can append to this window. Therefore, the total eligible subarrays ending with index r = acc + 1. *
 *                                                                                                                                                                                                                                                                                                                                            *
 * How should we maintain the value of acc? Each time we reach a total of K distinct values in the window, we should examine if the value at left pointer could be removed. (a.k.a the left pointer always points to a distinct value that only appear once in the window)                                                                    *
 *                                                                                                                                                                                                                                                                                                                                            *
 * In addition, when we have K + 1 distinct values, the head of the window must be removed, thus all the previous accumulations would be disjoint. In such case, we should reset acc = 0.                                                                                                                                                     *
 *                                                                                                                                                                                                                                                                                                                                            *
 * Time complexity: O(n)                                                                                                                                                                                                                                                                                                                      *
 * Space complexity: O(n)                                                                                                                                                                                                                                                                                                                     *
 **********************************************************************************************************************************************************************************************************************************************************************************************************************************************/