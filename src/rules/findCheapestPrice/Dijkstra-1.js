
/****************************************************************************************************************
 * Runtime: 860 ms, faster than 19.02% of JavaScript online submissions for Cheapest Flights Within K Stops.    *
 * Memory Usage: 54.5 MB, less than 9.20% of JavaScript online submissions for Cheapest Flights Within K Stops. *
 ****************************************************************************************************************/

var findCheapestPrice = function (n, flights, src, dst, K) {
    let graph = {}
    flights.forEach((flight) => {
        if (!graph[flight[0]]) graph[flight[0]] = {}
        graph[flight[0]][flight[1]] = flight[2]
    })
    let stack = [[src, 0, 0]]
    while (stack.length) {
        let ele = stack.shift()
        let [source, cost, stop] = ele
        if (stop > K + 1) continue
        if (source == dst) return cost
        for (let destination in graph[source]) {
            stack.push([destination, cost + graph[source][destination], stop + 1])
        }
        stack.sort((a, b) => { return a[1] - b[1] })
    }
    return -1
};
export default findCheapestPrice;
