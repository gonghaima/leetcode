/**
 * @param { } deadends
 * @param {string} target
 * @return {number}
 */

// https://leetcode.com/problems/open-the-lock/discuss/1250681/JS-Python-Java-C%2B%2B-or-Easy-Shortest-Path-Solution-w-Explanation

/***********************************************************************************************
 * Runtime: 148 ms, faster than 92.62% of JavaScript online submissions for Open the Lock.     *
 * Memory Usage: 44.5 MB, less than 99.18% of JavaScript online submissions for Open the Lock. *
 ***********************************************************************************************/

var openLock = function(deadends, target) {
  if (target === '0000') return 0;
  let queue = [0],
    seen = new Uint8Array(10000);
  for (let d of deadends) seen[~~d] = 1;
  target = ~~target;
  if (seen[0]) return -1;
  for (let turns = 1; queue.length; turns++) {
    let qlen = queue.length;
    for (let i = 0; i < qlen; i++) {
      let curr = queue.shift();
      for (let j = 1; j < 10000; j *= 10) {
        let mask = ~~((curr % (j * 10)) / j),
          masked = curr - mask * j;
        for (let k = 1; k < 10; k += 8) {
          let next = masked + ((mask + k) % 10) * j;
          if (seen[next]) continue;
          if (next === target) return turns;
          seen[next] = 1;
          queue.push(next);
        }
      }
    }
  }
  return -1;
};
export default openLock;
