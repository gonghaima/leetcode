/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */

/**
 * 
 *For this problem, 
 we just need construct a new array to move the value into the leftmost point we can water, 
 so the problem becomes Jump Game II. 
 For example, at index i we could water (i - arr[i]) ~ (i + arr[i]). 
 So we store the farthest point we can water at "i - arr[i]". 
 Then "left" in range [left, right] is index and "right" is the value in arr[index].
 */

// https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/discuss/506853/Java-A-general-greedy-solution-to-process-similar-problems

/**********************************************************************************************************************************
 *   Runtime: 81 ms, faster than 80.43% of JavaScript online submissions for Minimum Number of Taps to Open to Water a Garden.    *
 * Memory Usage: 40.7 MB, less than 83.70% of JavaScript online submissions for Minimum Number of Taps to Open to Water a Garden. *
 **********************************************************************************************************************************/

var minTaps = function (n, ranges) {
    // construct the arr
    const arr = Array(n + 1).fill(null);
    for (let i = 0; i < ranges.length; i++) {
        if (ranges[i] == 0) continue;
        let left = Math.max(0, i - ranges[i]);
        arr[left] = Math.max(arr[left], i + ranges[i]);
    };

    // same part like previous problem
    let end = 0, farCanReach = 0, cnt = 0;
    for (let i = 0; i < arr.length && end < n; end = farCanReach) {
        cnt++;
        while (i < arr.length && i <= end) {
            farCanReach = Math.max(farCanReach, arr[i++]);
        }
        if (end == farCanReach) return -1;
    }
    return cnt;
};

export default minTaps;