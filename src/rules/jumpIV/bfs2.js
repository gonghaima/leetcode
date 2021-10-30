/**
 * @param {number[]} arr
 * @return {number}
 */

/**********************************************************************************************
 *   Runtime: 212 ms, faster than 96.43% of JavaScript online submissions for Jump Game IV.   *
 * Memory Usage: 69.8 MB, less than 71.43% of JavaScript online submissions for Jump Game IV. *
 **********************************************************************************************/


var minJumps = function (arr) {
    let res = 0, n = arr.length;
    if (n == 1) {
        return 0;
    };

    const visited = Array(n).fill(false);
    const map = new Map();
    for (let i = 0; i < n; i++) {
        if (!map.has(arr[i])) map.set(arr[i], new Set());
        map.set(arr[i], map.get(arr[i]).add(i));
    };
    let head = new Set(), tail = new Set();
    head.add(0);
    tail.add(n - 1);
    visited[0] = true;
    visited[n - 1] = true;
    while (head.size && tail.size) {
        if (head.size > tail.size) {
            let temp = tail;
            tail = head;
            head = temp;
        }
        let next = new Set();

        for (let i of head) {
            let x = i + 1, y = i - 1;
            if (tail.has(x) || tail.has(y)) {
                return res + 1;
            }
            if (x < n && !visited[x]) {
                visited[x] = true;
                next.add(x);
            }
            if (y >= 0 && !visited[y]) {
                visited[y] = true;
                next.add(y);
            }
            for (let z of map.get(arr[i])) {
                if (z == i) {
                    continue;
                }
                if (tail.has(z)) {
                    return res + 1;
                }
                if (!visited[z]) {
                    visited[z] = true;
                    next.add(z);
                }
            }
        }
        head = next;
        res++;
    }
    return -1;
}

export default minJumps;