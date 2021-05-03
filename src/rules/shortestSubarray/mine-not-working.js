/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function (A, K) {
    if (A.length === 1) {
        return A[0] >= K ? 1 : -1;
    }
    let left = 0, currentTotal = null, shortest = Number.MAX_VALUE;
    for (let right = 0; right < A.length; right++) {
        if (currentTotal === null) currentTotal = 0;
        currentTotal += A[right];
        if (currentTotal < K) {
            continue;
        } else {
            debugger;
            shortest = Math.min(shortest, right - left + 1);
            let tempLeft = left;
            let tempTotal = currentTotal;
            let nextLeft = Number.MAX_VALUE;
            let nextTotal = Number.MAX_VALUE;
            while (tempLeft < right) {
                if (tempTotal >= K) {
                    shortest = Math.min(shortest, right - tempLeft + 1);
                    nextTotal = tempTotal;
                    nextLeft = tempLeft;
                }
                tempTotal -= A[tempLeft];
                tempLeft++;
            }
            left = nextLeft;
            currentTotal = nextTotal;
        }

    }
    return shortest === Number.MAX_VALUE ? -1 : shortest;
};

export default shortestSubarray;