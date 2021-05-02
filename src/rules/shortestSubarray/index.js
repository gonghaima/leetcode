/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function (A, K) {
    let left = 0, currentTotal = null, shortest = -1;
    for (let right = 0; right < A.length; right++) {
        if (currentTotal === null) currentTotal = 0;
        currentTotal += A[right];
        if (currentTotal < K) {
            continue;
        } else if (currentTotal = K) {
            shortest = Math.max(shortest, right - left + 1);
        } else {
            while (currentTotal > K) {
                currentTotal -= A[right];
                left++;
            }
        }

    }
    return shortest < 0 ? -1 : shortest;
};

export default shortestSubarray;