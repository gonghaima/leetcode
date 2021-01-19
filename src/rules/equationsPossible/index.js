/*********************************************************************************************************************
 * Runtime: 100 ms, faster than 46.43% of JavaScript online submissions for Satisfiability of Equality Equations.    *
 * Memory Usage: 42.2 MB, less than 28.57% of JavaScript online submissions for Satisfiability of Equality Equations *
 *********************************************************************************************************************/

export default (equations) => {
  let parent = new Map();
  const find = a => {
    parent.set(a, parent.get(a) || a);
    return parent.get(a) === a ? a : find(parent.get(a));
  }

  equations.forEach(([a, s, , b]) => {
    if (s === "=") {
      find(a);
      find(b);
      parent.set(find(a), find(b));
    }
  })

  for (let [a, s, , b] of equations) {
    if (s === "!") {
      if (find(a) === find(b)) return false;
    }
  }

  return true;
};
