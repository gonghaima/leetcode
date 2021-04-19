/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

/*********************************************************************************************************************
 * Runtime: 116 ms, faster than 77.36% of JavaScript online submissions for Subarrays with K Different Integers.     *
 * Memory Usage: 47.1 MB, less than 26.42% of JavaScript online submissions for Subarrays with K Different Integers. *
 *********************************************************************************************************************/

// sliding window
// https://leetcode.com/problems/subarrays-with-k-different-integers/discuss/408810/Clean-JavaScript-solution-(atMost)
// https://www.youtube.com/watch?v=FZPtxuxArLU

var subarraysWithKDistinct = function (A, K) {
    function atMostK(k) {
        let l = 0;
        let res = 0;
        const count = {};

        for (let r = 0; r < A.length; r++) {
            if (count[A[r]] == null) count[A[r]] = 0;
            if (count[A[r]] === 0) k--;
            count[A[r]]++;

            while (k < 0) {
                count[A[l]]--;
                if (count[A[l]] === 0) k++;
                l++;
            }
            res += r - l + 1;
        }
        return res;
    }

    return atMostK(K) - atMostK(K - 1);
}
export default subarraysWithKDistinct;