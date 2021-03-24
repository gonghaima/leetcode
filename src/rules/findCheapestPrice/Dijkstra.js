/*****************************************************************************************************************
 * Runtime: 112 ms, faster than 89.57% of JavaScript online submissions for Cheapest Flights Within K Stops.     *
 * Memory Usage: 46.2 MB, less than 58.26% of JavaScript online submissions for Cheapest Flights Within K Stops. *
 *****************************************************************************************************************/

var findCheapestPrice = function (n, flights, src, dst, K) {
    const adjacencyList = new Map();

    for (let [start, end, cost] of flights) {
        if (adjacencyList.has(start)) adjacencyList.get(start).push([end, cost]);
        else adjacencyList.set(start, [[end, cost]]);
    }

    const queue = [[0, src, K + 1]];
    const visited = new Map();

    while (queue.length) {
        queue.sort((a, b) => a[0] - b[0]);

        const [cost, city, stops] = queue.shift();
        visited.set(city, stops);

        if (city === dst) return cost;
        if (stops <= 0 || !adjacencyList.has(city)) continue;

        for (let [nextCity, nextCost] of adjacencyList.get(city)) {
            if (visited.has(nextCity) && visited.get(nextCity) >= stops - 1) continue;
            queue.push([cost + nextCost, nextCity, stops - 1]);
        }
    }
    return -1;
};
export default findCheapestPrice;
