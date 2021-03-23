/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */

/*****************************************************************************************************************
 * Runtime: 88 ms, faster than 97.39% of JavaScript online submissions for Cheapest Flights Within K Stops.      *
 * Memory Usage: 41.3 MB, less than 86.09% of JavaScript online submissions for Cheapest Flights Within K Stops. *
 *****************************************************************************************************************/

//BellmanFord

var findCheapestPrice = function (n, flights, src, dst, K) {
    let time = Array(n).fill(Infinity);
    time[src] = 0;
    for (let i = 0; i < K + 1; i++) {
        let N=[...time];
        for (const [u, v, t] of flights) {
            if (N[v] > time[u] + t) {
                N[v] = time[u] + t;
            }
        };
        time=[...N];
    }
    if (time[dst] === Infinity) return -1;
    return time[dst];
};

export default findCheapestPrice;