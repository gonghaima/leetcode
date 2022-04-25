/***********************************************************************************************
 * Runtime: 283 ms, faster than 71.07% of JavaScript online submissions for Open the Lock.     *
 * Memory Usage: 57.4 MB, less than 67.77% of JavaScript online submissions for Open the Lock. *
 ***********************************************************************************************/

// https://leetcode.com/problems/open-the-lock/discuss/1742778/JavaScript-BFS

// calculate prev & next number - iterations of m (= 10)
const fix = (n, m) => {
  return ((n % m) + m) % m;
};

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  const queue = ['0000'];
  let distance = 0;

  // create a map of visited + deadends
  const map = {};
  for (let i = 0; i < deadends.length; i++) {
    map[deadends[i]] = true;
  }

  // BFS ---------
  while (queue.length > 0) {
    let queueLength = queue.length;

    while (queueLength--) {
      const node = queue.shift();

      // the target is found
      if (node === target) return distance;

      // if deadend or visited
      if (map[node]) continue;

      // mark as visited
      map[node] = true;

      // for each wheel
      for (let i = 0; i < 4; i++) {
        // -1 = backwards, 1 = forwards
        for (let direction of [-1, 1]) {
          // generate the relevant string
          const num = fix(Number(node[i]) + direction, 10);
          const prefix = node.substring(0, i);
          const suffix = node.substring(i + 1, 4);
          const updated = `${prefix}${num}${suffix}`;

          queue.push(updated);
        }
      }
    }

    distance++;
  }

  return -1;
};
export default openLock;
