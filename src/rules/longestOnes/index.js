/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**********************************************************************************************************
 * Runtime: 80 ms, faster than 97.53% of JavaScript online submissions for Max Consecutive Ones III.      *
 * Memory Usage: 43.3 MB, less than 80.86% of JavaScript online submissions for Max Consecutive Ones III. *
 **********************************************************************************************************/

// sliding window

var longestOnes = function (nums, k) {
    let i = 0, j = 0, len = 0, res = 0;
    while (j < nums.length) {
        if (nums[j] === 0 && k) len++, k--, j++;
        else if (nums[j] === 1) len++, j++;
        else {
            res = Math.max(res, len);
            if (nums[i] === 0) k++;
            i++, len--;
        }
    }
    return Math.max(res, len);
};

export default longestOnes;