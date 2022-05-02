/**
 * @param {string} s
 * @return {string}
 */

// https://leetcode.com/problems/reorganize-string/discuss/480696/JavaScript-Solution-Sort-and-PQ

var reorganizeString = function(S) {
  let hash = {},
    pq = [];
  for (let s of S) hash[s] = hash[s] + 1 || 1;

  for (let key in hash) pq.push([key, hash[key]]);

  pq.sort((a, b) => b[1] - a[1]);

  let res = '';
  while (pq.length != 0) {
    let lastChar = res[res.length - 1];
    let first = pq.shift();

    if (lastChar != first[0]) {
      res += first[0];
      if (first[1] != 1) pq.push([first[0], first[1] - 1]);
    } else {
      let second = pq.shift();
      if (second == null) return '';
      res += second[0];
      pq.push(first);
      if (second[1] != 1) pq.push([second[0], second[1] - 1]);
    }
    pq.sort((a, b) => b[1] - a[1]);
  }
  return res;
};

export default reorganizeString;
