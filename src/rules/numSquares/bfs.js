/**
 * @param {number} n
 * @return {number}
 */

/*************************************************************************************************
 *   RUNTIME: 128 MS, FASTER THAN 96.38% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PERFECT SQUARES.   *
 * MEMORY USAGE: 45.5 MB, LESS THAN 21.93% OF JAVASCRIPT ONLINE SUBMISSIONS FOR PERFECT SQUARES. *
 *************************************************************************************************/

// https://leetcode.com/problems/perfect-squares/discuss/71475/Short-Python-solution-using-BFS

var numSquares = function (n) {
    if (n < 2) return n;
    const lst = [];
    let i = 1;

    while (i * i <= n) {
        lst.push(i * i);
        i += 1;
    };

    let cnt = 0;
    let toCheck = new Set();
    toCheck.add(n);
    while (toCheck.size) {
        cnt += 1;
        let temp = new Set();
        for (const x of toCheck) {
            for (const y of lst) {
                if (x === y) return cnt;
                if (x < y) break;
                temp.add(x - y);
            }
        };
        toCheck = temp;
    };
    return cnt;
};

export default numSquares;