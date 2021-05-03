/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function (A, K) {
    let left = 0, currentTotal = null, shortest = Number.MAX_VALUE;
    for (let right = 0; right < A.length; right++) {
        if (currentTotal === null) currentTotal = 0;
        currentTotal += A[right];
        if (currentTotal < K) {
            continue;
        } else {
            while (currentTotal >= K) {
                shortest = Math.min(shortest, right - left + 1);
                currentTotal -= A[left];
                left++;
            }
        }

    }
    return shortest === Number.MAX_VALUE ? -1 : shortest;
};

export default shortestSubarray;