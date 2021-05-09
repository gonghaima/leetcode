/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/********************************************************************************************************
 * Runtime: 352 ms, faster than 80.75% of JavaScript online submissions for Sliding Window Maximum.     *
 * Memory Usage: 68.2 MB, less than 50.62% of JavaScript online submissions for Sliding Window Maximum. *
 ********************************************************************************************************/

//https://leetcode.com/problems/sliding-window-maximum/discuss/871317/Clear-thinking-process-with-PICTURE-brute-force-to-mono-deque-pythonjavajavascript

var maxSlidingWindow = function (nums, k) {
    const q = [];  // stores *indices*
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        while (q && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i);
        // remove first element if it's outside the window
        if (q[0] === i - k) {
            q.shift();
        }
        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res;
};

export default maxSlidingWindow;