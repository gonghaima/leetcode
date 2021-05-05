/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

/***********************************************************************************************************************
 * Runtime: 256 ms, faster than 90.91% of JavaScript online submissions for Shortest Subarray with Sum at Least K.     *
 * Memory Usage: 49.7 MB, less than 24.24% of JavaScript online submissions for Shortest Subarray with Sum at Least K. *
 ***********************************************************************************************************************/

// https://www.youtube.com/watch?v=gSV4IniBMh0

var shortestSubarray = function (A, K) {
    let sums = [0];
    A.forEach((a, idx) => sums.push(sums[idx] + a));
    let B = [], res = A.length + 1;
    for (let j = 0; j < sums.length; j++) {
        while (B.length > 0 && sums[B[B.length - 1]] > sums[j]) B.pop();
        while (B.length > 0 && (sums[j] - sums[B[0]] >= K)) res = Math.min(res, j - B.shift());
        B.push(j);
    }
    return res < A.length + 1 ? res : -1;
};

export default shortestSubarray;