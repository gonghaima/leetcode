/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

/***********************************************************************************************************************
 * Runtime: 272 ms, faster than 63.64% of JavaScript online submissions for Shortest Subarray with Sum at Least K.     *
 * Memory Usage: 48.4 MB, less than 36.36% of JavaScript online submissions for Shortest Subarray with Sum at Least K. *
 ***********************************************************************************************************************/

// https://www.youtube.com/watch?v=gSV4IniBMh0

var shortestSubarray = function (A, K) {
    let n = A.length;
    let len = Number.MAX_VALUE;

    let prefixSum = new Array(n + 1);
    prefixSum[0] = 0;

    //Calculate the prefix sum 
    for (let i = 1; i < n + 1; i++)
        prefixSum[i] = A[i - 1] + prefixSum[i - 1];
    let dq = [];

    //Maintain a monotone queue
    for (let i = 0; i < n + 1; i++) {
        while (dq.length && (prefixSum[i] - prefixSum[dq[0]]) >= K) {
            len = Math.min(len, i - dq[0]);
            dq.shift();
        }
        while (dq.length && prefixSum[i] < prefixSum[dq[dq.length - 1]]) {
            dq.pop();
        }
        dq.push(i);
    }
    return len == Number.MAX_VALUE ? -1 : len;
};

export default shortestSubarray;