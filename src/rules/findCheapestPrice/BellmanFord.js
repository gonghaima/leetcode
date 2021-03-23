/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */

/*****************************************************************************************************************
 * Runtime: 120 ms, faster than 82.61% of JavaScript online submissions for Cheapest Flights Within K Stops.     *
 * Memory Usage: 42.9 MB, less than 79.13% of JavaScript online submissions for Cheapest Flights Within K Stops. *
 *****************************************************************************************************************/

//BellmanFord
// interating with stops
// capture the destination with minimum cost, save to M, at each step
// at last, find the destination coset, if infinite return -1;
var findCheapestPrice = function (n, flights, src, dst, K) {
    let M = Array(n).fill().map((_, i) => i === src ? 0 : Infinity);
    //interating based on the steps
    for (let k = 0; k < K + 1; k++) {
        let N = [...M];
        for (let [from, to, price] of flights) {
            N[to] = Math.min(N[to], M[from] + price);
        }
        M = [...N];
    }
    return M[dst] != Infinity ? M[dst] : -1
};

export default findCheapestPrice;