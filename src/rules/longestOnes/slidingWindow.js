/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**********************************************************************************************************
 * Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Max Consecutive Ones III.     *
 * Memory Usage: 43.5 MB, less than 56.06% of JavaScript online submissions for Max Consecutive Ones III. *
 **********************************************************************************************************/

// sliding window
//https://leetcode.com/problems/max-consecutive-ones-iii/discuss/628012/JavaScript-Easy-to-understand-3-solutions


// We move the right edge step by step just like solution 2. But the key point is that we also move the left edge step by step if it's necessary.
// But why? It's pretty easy to find out that the window could be invalidated.

// Let's see, first of all, we only need to find out the longest subarray which means we don't care about the others.

// Then, if we have a subarray right now. There are only 2 situations:

// We could find a longer one: the window will be validated naturally when we meet the longer one.
// It's the longest one: we got the longest length even the current window may not be validated.


const longestOnes = (arr, k) => {
    let left = -1;
    for (let right = 0; right < arr.length; ++right) {
        arr[right] === 0 && --k;
        k < 0 && arr[++left] === 0 && ++k;
    }
    return arr.length - left - 1;
};

export default longestOnes;