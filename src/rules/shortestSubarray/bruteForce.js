/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

// brute force, Time Limit Exceeded

var shortestSubarray = function (A, K) {
    let n = A.length;
    let preSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        preSum[i + 1] = A[i] + preSum[i];
    }
    let len = n + 1;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = preSum[j + 1] - preSum[i];
            if (sum >= K) {
                len = Math.min(len, j - i + 1);
            }
        }
    }
    return len === n + 1 ? -1 : len;
};

export default shortestSubarray;