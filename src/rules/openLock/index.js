/**
 * @param { } deadends
 * @param {string} target
 * @return {number}
 */

// https://leetcode.com/problems/open-the-lock/discuss/730358/Simple-and-readable-BFS-solution-in-JavaScript-%2B-Explanation

/***********************************************************************************************
 * Runtime: 250 ms, faster than 77.60% of JavaScript online submissions for Open the Lock.     *
 * Memory Usage: 60.5 MB, less than 50.00% of JavaScript online submissions for Open the Lock. *
 ***********************************************************************************************/

var openLock = function(deadends, target) {
  const dead = new Set(deadends);
  const queue = [['0000', 0]];
  const seen = new Set(['0000']);

  for (let [curr, turns] of queue) {
    if (curr === target) return turns;
    if (dead.has(curr)) continue;
    for (let next of getNextStates(curr)) {
      if (seen.has(next)) continue;
      seen.add(next);
      queue.push([next, turns + 1]);
    }
  }

  return -1;
};

function getNextStates(s = '0000') {
  const ans = [];

  for (let i = 0; i < s.length; i++) {
    ans.push(s.slice(0, i) + ((+s[i] + 1) % 10).toString() + s.slice(i + 1));
    ans.push(s.slice(0, i) + ((+s[i] + 9) % 10).toString() + s.slice(i + 1));
  }

  return ans;
}

export default openLock;
