/**
 * @param {string} num
 * @return {number[]}
 */

/*********************************************************************************************************************
 * Runtime: 777 ms, faster than 21.43% of JavaScript online submissions for Split Array into Fibonacci Sequence.     *
 * Memory Usage: 51.9 MB, less than 28.57% of JavaScript online submissions for Split Array into Fibonacci Sequence. *
 *********************************************************************************************************************/

// https://leetcode.com/problems/split-array-into-fibonacci-sequence/submissions/

// back track

var splitIntoFibonacci = function(S) {
  let s, n, res, find;
  const dfs = (pos, cur) => {
    if (pos == n && ok(cur)) {
      // when pos reach end, means use out all string, check if answer exist
      res = cur;
      find = true;
      return;
    }
    for (let i = pos; i < n; i++) {
      let third = s.slice(pos, i + 1); // find third number will keep fib
      if (cur.length > 2 && !ok(cur)) break; // not fib ? stop it
      cur.push(third);
      dfs(i + 1, cur);
      if (find) break; // has found an answer, return it
      cur.pop();
    }
  };

  const MAX = 2 ** 31;
  const ok = (a) => {
    // check if current appended array meet the criteria
    if (a.length < 3) return false;
    for (const s of a) {
      if (s[0] == '0' && s.length > 1) return false; // number should not have leading zeros
      if (s.length > 10 || s - '0' > MAX) return false; // fit 31 bits
    }
    a = a.map(Number);
    for (let i = 0; i + 2 < a.length; i++) {
      if (a[i] + a[i + 1] != a[i + 2]) return false;
    }
    return true;
  };

  s = S;
  n = s.length;
  res = [];
  find = false;
  dfs(0, []);
  return res;
};

export default splitIntoFibonacci;
